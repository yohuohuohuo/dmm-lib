import { ErcType, NftscanRequestData } from '@/types/nftscan-type';

export interface AccountOwnParams extends NftscanRequestData {
  /**
   * Can be erc721 or erc1155. Required if contract_address is null
   */
  erc_type?: ErcType;
  /**
   * The NFT contract address for the assets
   */
  contract_address?: string;
  /**
   * Whether to load attribute data of the assets. Default is false
   */
  show_attribute?: boolean;
}
