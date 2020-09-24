import { CompanyBankProps } from "../../@types/company/companyBank";

export const prepareEmptyStaffModel = () => {
  const company: CompanyBankProps = {
    id: null,
    bankCode: '',
    bankName: '',
    bankAddress: '',
    bankAccountName: '',
    bankAccountNumber: '',
    accountingCodeId: null,
    paypalAccount: '',
    paypalNumber: '',
    cifCode: '',
    iebCode: '',
    companyId: null
  }

  return company;
}