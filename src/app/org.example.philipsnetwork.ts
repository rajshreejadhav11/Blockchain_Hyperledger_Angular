import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.philipsnetwork{
   export enum ImageType {
      MRIScan,
      CTScan,
   }
   export enum TransferStatus {
      APPROVED,
      ANONYMIZEDENCRYPTED,
      IN_TRANSIT,
      ARRIVED,
   }
   export abstract class TransferTransaction extends Transaction {
      transfer: Transfer;
   }
   export class TransferReceived extends TransferTransaction {
   }
   export class Transfer extends Asset {
      transferId: string;
      type: ImageType;
      status: TransferStatus;
      unitCount: number;
      contract: Contract;
   }
   export class Contract extends Asset {
      contractId: string;
      hospital: Hospital;
      marketplace: Marketplace;
      researchInst: ResearchInst;
      unitPrice: number;
   }
   export abstract class Business extends Participant {
      email: string;
      accountBalance: number;
   }
   export class Hospital extends Business {
   }
   export class Marketplace extends Business {
   }
   export class ResearchInst extends Business {
   }
   export class SetupDemo extends Transaction {
   }
   export class AnonymizeEncrypt extends TransferTransaction {
   }
// }
