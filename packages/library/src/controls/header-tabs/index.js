/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import ProNotice from '../pro-notice';

const HeaderTabs = ({ generalTab, styleTab, advancedTab, attributes, setAttributes, block = '' }) => {
    const panelProps = { attributes, setAttributes };
    const { selectedTab } = attributes;

    return (
        <>
            <div className="zolo-panel-control">
                <ButtonGroup className="zolo-tab-group">
                    <Button
                        className={`zolo-tab ${selectedTab === 'basic' ? 'active__tab' : ''}${selectedTab === 'style' ? 'prev__tab' : ''}`}
                        onClick={() => setAttributes({ selectedTab: 'basic' })}
                        key="basic"
                    >
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path
                                d="M45.07,75.33H25.34a4.1,4.1,0,0,1-4.08-4.08v-46a4.1,4.1,0,0,1,4.08-4.08h46a4.1,4.1,0,0,1,4.08,4.08V45a2.5,2.5,0,0,0,5,0V25.22a9.08,9.08,0,0,0-9.08-9.08h-46a9.08,9.08,0,0,0-9.08,9.08v46a9.08,9.08,0,0,0,9.08,9.08H45.07a2.5,2.5,0,1,0,0-5ZM82.16,59.06,49.28,45.91A2.51,2.51,0,0,0,46,49.16L59.19,82a2.5,2.5,0,0,0,2.32,1.57h0A2.49,2.49,0,0,0,63.83,82L69,68.9l13.13-5.19a2.5,2.5,0,0,0,0-4.65Zm-16,5.59a2.54,2.54,0,0,0-1.41,1.41l-3.28,8.29L52.84,52.72l21.63,8.65Z"
                                style={{
                                    fill: '#39394d',
                                }}
                            />
                            <rect
                                width="100"
                                height="100"
                                style={{
                                    fill: 'none',
                                }}
                            />
                        </svg>

                        <h5 className="zolo-tab-label">{__('Basic', 'zoloblocks')}</h5>
                    </Button>
                    <Button
                        className={`zolo-tab ${selectedTab === 'style' ? 'active__tab' : ''}${selectedTab === 'basic' ? 'next__tab' : ''}${
                            selectedTab === 'extra' ? 'sup_prev__tab' : ''
                        }`}
                        onClick={() => setAttributes({ selectedTab: 'style' })}
                        key="style"
                    >
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path
                                d="M85,24.38a9.4,9.4,0,0,0-16-6.65L56.52,30.18l-3.41-3.41a9,9,0,0,0-12.7,0L35.23,32a2.52,2.52,0,0,0,0,3.54L37,37.25c-5.62,7.53-11.36,8.84-19.93,10.27a2.49,2.49,0,0,0-1.54,4l26,32.53a2.48,2.48,0,0,0,1.95.94,2.55,2.55,0,0,0,1.11-.26c5.64-2.82,16-12.53,19.64-20.25l.25.26a2.51,2.51,0,0,0,3.54,0l5.18-5.18a9,9,0,0,0,0-12.71l-3.4-3.4L82.27,31A9.37,9.37,0,0,0,85,24.38ZM44.12,79.29,31.79,63.87l23,5.75A55.16,55.16,0,0,1,44.12,79.29Zm14-14L26.63,57.42l-4.58-5.73c7.31-1.49,13.05-3.83,18.51-10.88L60.41,60.67A15.1,15.1,0,0,1,58.12,65.3ZM78.73,27.49,64.51,41.71a2.52,2.52,0,0,0,0,3.54l5.17,5.16a4,4,0,0,1,0,5.65l-3.41,3.4L64.8,58h0L42,35.22h0l-1.49-1.49,3.4-3.4a4,4,0,0,1,5.64,0l5.17,5.18a2.51,2.51,0,0,0,3.54,0L72.51,21.27a4.4,4.4,0,1,1,6.22,6.22Z"
                                style={{
                                    fill: '#39394d',
                                }}
                            />
                            <rect
                                width="100"
                                height="100"
                                style={{
                                    fill: 'none',
                                }}
                            />
                        </svg>

                        <h5 className="zolo-tab-label">{__('Style', 'zoloblocks')}</h5>
                    </Button>
                    <Button
                        className={`zolo-tab ${selectedTab === 'extra' ? 'active__tab' : ''}${selectedTab === 'style' ? 'next__tab' : ''}`}
                        onClick={() => setAttributes({ selectedTab: 'extra' })}
                        key="extra"
                    >
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path
                                d="M50,36.74A13.26,13.26,0,1,0,63.26,50,13.28,13.28,0,0,0,50,36.74Zm0,21.52A8.26,8.26,0,1,1,58.26,50,8.26,8.26,0,0,1,50,58.26Zm34.47,2.88a9.68,9.68,0,0,0-4.57-5.92L79.44,55A4.72,4.72,0,0,1,77.1,50.9V49.09a4.68,4.68,0,0,1,.62-2.34A4.81,4.81,0,0,1,79.47,45l.51-.3A9.7,9.7,0,0,0,83.5,31.49l-.79-1.37A9.66,9.66,0,0,0,69.6,26.55l-.62.33a4.7,4.7,0,0,1-4.65,0L62.78,26a4.7,4.7,0,0,1-1.7-1.7,4.75,4.75,0,0,1-.63-2.34v-.65a9.57,9.57,0,0,0-2.83-6.83,9.68,9.68,0,0,0-6.83-2.84H49.21a9.68,9.68,0,0,0-9.66,9.67v.64a4.73,4.73,0,0,1-.62,2.34A4.81,4.81,0,0,1,37.21,26l-1.54.89a4.64,4.64,0,0,1-4.72,0l-.47-.25a9.67,9.67,0,0,0-13.19,3.53l-.79,1.37A9.68,9.68,0,0,0,20,44.66l.48.32.13.08a4.62,4.62,0,0,1,1.7,1.7,4.75,4.75,0,0,1,.64,2.31V50.9A4.67,4.67,0,0,1,20.53,55l-.51.3A9.68,9.68,0,0,0,16.5,68.51l.79,1.37a9.66,9.66,0,0,0,13.13,3.56l.6-.32a4.7,4.7,0,0,1,4.65,0l1.55.9a4.67,4.67,0,0,1,2.33,4v.65a9.75,9.75,0,0,0,2.83,6.84,9.6,9.6,0,0,0,6.83,2.83h1.58a9.66,9.66,0,0,0,9.66-9.67v-.65a4.72,4.72,0,0,1,2.34-4l1.53-.89a4.68,4.68,0,0,1,4.74,0l.46.25a9.64,9.64,0,0,0,7.33,1,9.78,9.78,0,0,0,5.88-4.53l.77-1.38A9.64,9.64,0,0,0,84.47,61.14ZM79.16,66l-.77,1.37A4.66,4.66,0,0,1,72,69l-.46-.25a9.85,9.85,0,0,0-9.68,0l-1.53.9a9.71,9.71,0,0,0-4.83,8.37v.65a4.68,4.68,0,0,1-4.66,4.67H49.21A4.59,4.59,0,0,1,45.92,82a4.7,4.7,0,0,1-1.37-3.3v-.66a9.69,9.69,0,0,0-4.82-8.36l-1.55-.9a9.64,9.64,0,0,0-9.6,0l-.6.33a4.66,4.66,0,0,1-6.36-1.71L20.83,66a4.67,4.67,0,0,1,1.74-6.4l.5-.31a9.71,9.71,0,0,0,4.83-8.4V49.05a9.69,9.69,0,0,0-4.75-8.27l-.48-.32-.13-.08A4.68,4.68,0,0,1,20.83,34l.79-1.36a4.69,4.69,0,0,1,2.83-2.18,4.78,4.78,0,0,1,3.6.51l.46.25a9.82,9.82,0,0,0,9.68,0l1.53-.9a9.65,9.65,0,0,0,4.83-8.37v-.65A4.7,4.7,0,0,1,45.92,18a4.59,4.59,0,0,1,3.29-1.37h1.58A4.66,4.66,0,0,1,54.08,18a4.6,4.6,0,0,1,1.37,3.3v.65a9.73,9.73,0,0,0,4.82,8.37l1.55.9a9.88,9.88,0,0,0,9.59,0l.61-.33a4.64,4.64,0,0,1,3.53-.47,4.69,4.69,0,0,1,2.83,2.17L79.17,34a4.69,4.69,0,0,1-1.73,6.4l-.5.3A9.73,9.73,0,0,0,72.1,49.1v1.78A9.7,9.7,0,0,0,77,59.35l.46.24A4.71,4.71,0,0,1,79.16,66Z"
                                style={{
                                    fill: '#39394d',
                                }}
                            />
                            <rect
                                width="100"
                                height="100"
                                style={{
                                    fill: 'none',
                                }}
                            />
                        </svg>
                        <h5 className="zolo-tab-label">{__('Extra', 'zoloblocks')}</h5>
                    </Button>
                </ButtonGroup>
                <div className="zolo-tab-controls">
                    {selectedTab === 'basic' && (
                        <Fragment>{applyFilters('zolo.blocks.generalTab', generalTab, block, panelProps)}</Fragment>
                    )}
                    {selectedTab === 'style' && <Fragment>{applyFilters('zolo.blocks.styleTab', styleTab, block, panelProps)}</Fragment>}
                    {selectedTab === 'extra' && <Fragment>{advancedTab}</Fragment>}
                </div>
            </div>

        </>
    );
};

export default HeaderTabs;
