import { type BlockConfiguration, registerBlockType } from '@wordpress/blocks';

export function registerInnerBlock(metadata: Partial<BlockConfiguration>) {
	const defaultMetaData = {
		$schema: 'https://schemas.wp.org/trunk/block.json',
		apiVersion: 3,
		category: "zolo-qr-code",
		textdomain: "zolo-qr-code",
	};

	return registerBlockType(
		metadata.name as string,
		{ ...defaultMetaData, ...metadata } as BlockConfiguration
	);
}
