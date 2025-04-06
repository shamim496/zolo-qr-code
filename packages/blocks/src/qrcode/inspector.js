/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import {
  SelectControl,
  ToggleControl,
  TextareaControl,
  BaseControl,
  Button,
  TextControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import objAttributes from "./attributes";
import { applyFilters } from "@wordpress/hooks";

/**
 * Internal depencencies
 */
import {
  ColorControl,
  SimpleRangeControl,
  BorderControl,
  ResDimensionsControl,
  HeaderTabs,
  ResAlignmentControl,
  AdvancedOptions,
  ZoloPanelBody,
  BoxShadowControl,
  TypographyDropdown,
  ResRangeControl,
} from "@zoloblocks/library";

import {
  QR_CODE_LEVEL,
  QR_CODE_BORDER,
  QR_CODE_ALIGN,
  QR_CODE_BORDER_RADIUS,
  WRAP_QR_CODE_BORDER,
  WRAP_QR_CODE_BORDER_RADIUS,
  WRAP_QR_CODE_PADDING,
  WRAP_QR_CODE_BOX_SHADOW,
  BADGE_QR_CODE_BORDER,
  BADGE_QR_CODE_BORDER_RADIUS,
  BADGE_QR_CODE_PADDING,
  BADGE_QR_CODE_MARGIN,
  BADGE_QR_CODE_BOX_SHADOW,
  BADGE_ICON_SIZE,
  // BADGE_TYPOGRAPHY
} from "./constants/index";

import { BADGE_TYPOGRAPHY } from "./constants/typoPrefixConstant";

export default function Inspector(props) {
  const { attributes, setAttributes, block } = props;

  const {
    resMode,
    badgeStyle,
    // settings
    qrContent,
    qrCodeLink,
    codeColor,
    backgroundColor,
    qrCodePadding,

    qrCodeLevel,
    qrCodeSize,
    eyeColor,
    eyeRadius,
    showBadge,
    showBadgeIcon,
    wrapBackgroundColor,
    badgeTextColor,
    badgeBackgroundColor,
    badgeBackgroundArrowColor,
  } = attributes;

  const requiredProps = {
    resMode,
    attributes,
    setAttributes,
    objAttributes,
  };
  const hookLinks = applyFilters(
    "zolo.blocks.controls.qrcode.pageLinks",
    [],
    props,
    "zolo/qrcode"
  );
  const hookStyles = applyFilters(
    "zolo.blocks.controls.qrcode.styles",
    [],
    props,
    "zolo/qrcode"
  );
  const hookLogo = applyFilters(
    "zolo.blocks.controls.qrcode.logo",
    [],
    props,
    "zolo/qrcode"
  );
  const hookLogoStyle = applyFilters(
    "zolo.blocks.controls.qrcode.logoStyle",
    [],
    props,
    "zolo/qrcode"
  );
  return (
    <>
      <InspectorControls>
        <HeaderTabs
          block="zolo/qrcode"
          attributes={attributes}
          setAttributes={setAttributes}
          generalTab={
            <>
              <ZoloPanelBody
                title={__("QR Code", "zoloblocks")}
                panelProps={requiredProps}
                firstOpen={true}
              >
                {!qrCodeLink && (
                  <TextareaControl
                    className="zolo-flex-col-control"
                    label={__("Content", "zoloblocks")}
                    value={qrContent}
                    onChange={(value) =>
                      setAttributes({
                        qrContent: value,
                      })
                    }
                  />
                )}
                {/* hook links */}
                {hookLinks && hookLinks.length > 0 && hookLinks}
                <div className="zolo-flex-col-control">
                  <SimpleRangeControl
                    label={__("Size", "zoloblocks")}
                    value={qrCodeSize}
                    onChange={(value) =>
                      setAttributes({
                        qrCodeSize: value,
                      })
                    }
                    onReset={() =>
                      setAttributes({
                        qrCodeSize: 0,
                      })
                    }
                    max={500}
                    noUnits={true}
                  />
                </div>

                <SelectControl
                  label={__("Error Level", "zoloblocks")}
                  value={qrCodeLevel}
                  onChange={(value) =>
                    setAttributes({
                      qrCodeLevel: value,
                    })
                  }
                  options={QR_CODE_LEVEL}
                />

                {/* hook styles */}
                {hookStyles && hookStyles.length > 0 && hookStyles}

                <ResAlignmentControl
                  label={__("Alignment", "zoloblocks")}
                  controlName={QR_CODE_ALIGN}
                  requiredProps={requiredProps}
                />
              </ZoloPanelBody>
              {hookLogo && hookLogo.length > 0 && hookLogo}
            </>
          }
          styleTab={
            <>
              {showBadge && (
                <ZoloPanelBody
                  title={__("Wrapper", "zoloblocks")}
                  panelProps={requiredProps}
                  firstOpen={showBadge ? true : false}
                  isPro={true}
                >
                  <BorderControl
                    label={__("Border Type", "zoloblocks")}
                    controlName={WRAP_QR_CODE_BORDER}
                    requiredProps={requiredProps}
                  />
                  <ResDimensionsControl
                    label={__("Border Radius", "zoloblocks")}
                    controlName={WRAP_QR_CODE_BORDER_RADIUS}
                    requiredProps={requiredProps}
                    forBorderRadius={true}
                  />
                  <ResDimensionsControl
                    label={__("Padding", "zoloblocks")}
                    controlName={WRAP_QR_CODE_PADDING}
                    requiredProps={requiredProps}
                    forBorderRadius={false}
                  />
                  <ColorControl
                    label={__("Background Color", "zoloblocks")}
                    color={wrapBackgroundColor}
                    onChange={(value) =>
                      setAttributes({
                        wrapBackgroundColor: value,
                      })
                    }
                  />

                  <BoxShadowControl
                    controlName={WRAP_QR_CODE_BOX_SHADOW}
                    requiredProps={requiredProps}
                  />
                </ZoloPanelBody>
              )}

              <ZoloPanelBody
                title={__("QR Code", "zoloblocks")}
                panelProps={requiredProps}
                firstOpen={!showBadge ? true : false}
              >
                <ColorControl
                  label={__("Color", "zoloblocks")}
                  color={codeColor}
                  onChange={(value) =>
                    setAttributes({
                      codeColor: value,
                    })
                  }
                />

                <ColorControl
                  label={__("Eye Color", "zoloblocks")}
                  color={eyeColor}
                  onChange={(value) =>
                    setAttributes({
                      eyeColor: value,
                    })
                  }
                />

                <div className="zolo-flex-col-control">
                  <SimpleRangeControl
                    label={__("Eye Radius", "zoloblocks")}
                    value={eyeRadius}
                    onChange={(value) =>
                      setAttributes({
                        eyeRadius: value,
                      })
                    }
                    onReset={() =>
                      setAttributes({
                        eyeRadius: "",
                      })
                    }
                    min={0}
                    max={100}
                    noUnits={true}
                  />
                </div>

                <ColorControl
                  label={__("Background Type", "zoloblocks")}
                  color={backgroundColor}
                  onChange={(value) =>
                    setAttributes({
                      backgroundColor: value,
                    })
                  }
                />

                <BorderControl
                  label={__("Border Type", "zoloblocks")}
                  controlName={QR_CODE_BORDER}
                  requiredProps={requiredProps}
                />

                <ResDimensionsControl
                  label={__("Border Radius", "zoloblocks")}
                  controlName={QR_CODE_BORDER_RADIUS}
                  requiredProps={requiredProps}
                  forBorderRadius={true}
                />

                <div className="zolo-flex-col-control">
                  <SimpleRangeControl
                    label={__("Padding", "zoloblocks")}
                    value={qrCodePadding}
                    onChange={(value) =>
                      setAttributes({
                        qrCodePadding: value,
                      })
                    }
                    onReset={() =>
                      setAttributes({
                        qrCodePadding: "",
                      })
                    }
                    min={1}
                    max={300}
                    noUnits={true}
                  />
                </div>
              </ZoloPanelBody>

              {hookLogoStyle && hookLogoStyle.length > 0 && hookLogoStyle}

              {showBadge && (
                <ZoloPanelBody
                  title={__("Badge", "zoloblocks")}
                  panelProps={requiredProps}
                  isPro={true}
                >
                  <ColorControl
                    label={__("Color", "zoloblocks")}
                    color={badgeTextColor}
                    onChange={(value) =>
                      setAttributes({
                        badgeTextColor: value,
                      })
                    }
                  />

                  <TypographyDropdown
                    label={__("Title Typography", "zoloblocks")}
                    typoPrefixConstant={BADGE_TYPOGRAPHY}
                    requiredProps={requiredProps}
                    max={72}
                  />

                  <ResDimensionsControl
                    label={__("Margin", "zoloblocks")}
                    controlName={BADGE_QR_CODE_MARGIN}
                    requiredProps={requiredProps}
                    forBorderRadius={false}
                  />

                  {badgeStyle !== "zolo-badge-style-1" && (
                    <>
                      <BorderControl
                        label={__("Border Type", "zoloblocks")}
                        controlName={BADGE_QR_CODE_BORDER}
                        requiredProps={requiredProps}
                      />

                      <ResDimensionsControl
                        label={__("Border Radius", "zoloblocks")}
                        controlName={BADGE_QR_CODE_BORDER_RADIUS}
                        requiredProps={requiredProps}
                        forBorderRadius={true}
                      />
                      <ResDimensionsControl
                        label={__("Padding", "zoloblocks")}
                        controlName={BADGE_QR_CODE_PADDING}
                        requiredProps={requiredProps}
                        forBorderRadius={false}
                      />

                      {showBadgeIcon && (
                        <ResRangeControl
                          label={__("Icon Size", "zoloblocks")}
                          controlName={BADGE_ICON_SIZE}
                          requiredProps={requiredProps}
                          min={0}
                          max={50}
                          step={1}
                        />
                      )}
                      <ColorControl
                        label={__("Background Color", "zoloblocks")}
                        color={badgeBackgroundColor}
                        onChange={(value) =>
                          setAttributes({
                            badgeBackgroundColor: value,
                          })
                        }
                      />
                      <ColorControl
                        label={__("Arrow Color", "zoloblocks")}
                        color={badgeBackgroundArrowColor}
                        onChange={(value) =>
                          setAttributes({
                            badgeBackgroundArrowColor: value,
                          })
                        }
                      />
                      <BoxShadowControl
                        controlName={BADGE_QR_CODE_BOX_SHADOW}
                        requiredProps={requiredProps}
                      />
                    </>
                  )}
                </ZoloPanelBody>
              )}
            </>
          }
          advancedTab={
            <>
              <div className="zolo-side-premium-notice-wrap">
                <img
                  src={zoloPlaceholder.extraImage}
                  alt="extra settings"
                  width="300"
                  height="700"
                />
                <div className="zolo-side-premium-notice">
                  <svg
                    className="zolo-premium-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50.17,19.22c1.91-3.48,5.22-4.43,5.22-4.43l-5.21-5.29-5.21,5.29s3.31.95,5.21,4.43Z"
                      style={{ fill: "#d59f30" }}
                    />
                    <path
                      d="M77.56,31.04c1.42-.03,3.35-1.18,3.35-3.38s-1.98-3.27-3.46-3.43-2.49,1.5-2.49,1.5c0,0,1.93-.29,2.06,1.63.13,1.93-2.63,1.85-2.46,2.33.16.48,1.58,1.37,3,1.34Z"
                      style={{ fill: "#d59f30" }}
                    />
                    <path
                      d="M72.73,18.05c.91,0,1.65-.74,1.65-1.65s-.74-1.65-1.65-1.65-1.65.74-1.65,1.65.74,1.65,1.65,1.65Z"
                      style={{ fill: "#d59f30" }}
                    />
                    <path
                      d="M92.97,19.53c-1.12,0-2.03.91-2.03,2.03s.91,2.03,2.03,2.03,2.03-.91,2.03-2.03-.91-2.03-2.03-2.03Z"
                      style={{ fill: "#d59f30" }}
                    />
                    <circle
                      cx="50.03"
                      cy="6.82"
                      r="2.22"
                      style={{ fill: "#d59f30" }}
                    />
                    <path
                      d="M22.79,31.04c1.42.03,2.84-.86,3-1.34.16-.48-2.6-.4-2.46-2.33s2.06-1.63,2.06-1.63c0,0-1.02-1.66-2.49-1.5s-3.46,1.23-3.46,3.43,1.93,3.35,3.35,3.38Z"
                      style={{ fill: "#d59f30" }}
                    />
                    <path
                      d="M27.61,18.05c.91,0,1.65-.74,1.65-1.65s-.74-1.65-1.65-1.65-1.65.74-1.65,1.65.74,1.65,1.65,1.65Z"
                      style={{ fill: "#d59f30" }}
                    />
                    <path
                      d="M7.04,19.14c-1.12,0-2.04.91-2.04,2.04s.91,2.04,2.04,2.04,2.04-.91,2.04-2.04-.91-2.04-2.04-2.04Z"
                      style={{ fill: "#d59f30" }}
                    />
                    <path
                      d="M81.35,24.63s1,1.04,1.13,2.65c.12,1.61-1.16,6.19-5.71,5.75-4.54-.44-6.35-4.98-6.27-7.15.08-2.17,1-3.7,1.77-3.94,1.45-.56,1.69-.68,1.65-1.73-.2-1.28-2.17-.56-2.81-.56-1.37-1.77-2.21-1.25-2.65-.32-.44.92,1.05,2.13,1.49,2.77-.48,2.85-6.27,7.07-10.37,7.19-4.1.12-6.51-2.93-6.97-5.55-.46-2.61,1.23-3.78,2.47-4.02,1.25-.24,2.61.52,2.93,1.45.32.92-.44,1.41-1.13,2.29,3.3.56,3.94-.96,4.26-2.09.32-1.12-.76-3.98-4.34-4.5-2.88-.42-5.65,2.61-6.62,3.82-.98-1.21-3.75-4.24-6.62-3.82-3.58.52-4.66,3.38-4.34,4.5.32,1.13.96,2.65,4.26,2.09-.68-.88-1.45-1.36-1.13-2.29.32-.92,1.69-1.69,2.93-1.45,1.25.24,2.93,1.41,2.47,4.02-.46,2.61-2.87,5.67-6.97,5.55-4.1-.12-9.89-4.34-10.37-7.19.44-.64,1.93-1.85,1.49-2.77-.44-.92-1.29-1.45-2.65.32-.64,0-2.61-.72-2.81.56-.04,1.05.2,1.17,1.65,1.73.76.24,1.69,1.77,1.77,3.94.08,2.17-1.73,6.71-6.27,7.15-4.54.44-5.83-4.14-5.71-5.75.12-1.61,1.13-2.65,1.13-2.65,0,0-5.26-2.66-9.92.32,1.12,1.32,5.55,2.25,10.31,14.02,8.08-5.09,19.29-8.24,31.67-8.24,11.68,0,22.3,2.8,30.25,7.39,4.63-10.96,8.87-11.87,9.96-13.16-4.66-2.98-9.93-.32-9.93-.32Z"
                      style={{ fill: "#d59f30" }}
                    />
                    <path
                      d="M71.72,54.99l-9.06,9.06c1.34,1.5,2.93,3.91,2.93,6.06,0,2.59-1.03,4.74-2.69,6.45-1.61,1.66-3.71,2.48-6.18,2.48h-19.67l34.55-33.99s.01,0,.02,0l5.62-5.55c-7.03-3.77-16.18-6.04-26.18-6.04s-18.92,2.22-25.92,5.91v23.64s21.69-22.03,21.69-22.03c1.39-.1,2.8-.16,4.24-.16,2.06,0,4.07.12,6.02.33l-31.95,31.81v21.52l12.76-.09h18.8c6.62,0,12.11-2.04,16.69-6.13,4.47-4.09,6.73-10.76,6.73-17.1,0-6.71-3.38-12.35-8.39-16.16ZM28.95,42.39c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM35.1,40.45c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM41.96,38.97c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM49.59,38.26c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM70.23,39.11c.66,0,1.2.54,1.2,1.2s-.54,1.2-1.2,1.2-1.2-.54-1.2-1.2.54-1.2,1.2-1.2ZM64.09,37.33c.66,0,1.2.54,1.2,1.2s-.54,1.2-1.2,1.2-1.2-.54-1.2-1.2.54-1.2,1.2-1.2ZM56.02,37.37c0-.66.54-1.2,1.2-1.2s1.2.54,1.2,1.2-.54,1.2-1.2,1.2-1.2-.54-1.2-1.2Z"
                      style={{ fill: "#d59f30" }}
                    />
                    <rect width={100} height={100} style={{ fill: "none" }} />
                  </svg>

                  <p>Get Zoloblocks for advanced control and extra features.</p>
                  <a
                    href="https://wordpress.org/plugins/zoloblocks/"
                    target="_blank"
                  >
                    Go Zoloblocks
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </>
          }
        />
      </InspectorControls>
    </>
  );
}
