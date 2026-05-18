import { ARProvince, BRState, CLComune, CivilStatus, Gender, IdentityType, Profession } from "../enums"

export interface RegisterBasicCaasUserRequest {
  first_name: string
  last_name: string
  phone_number: string
  profession: Profession
  gender: Gender
  birthdate: string
  citizenship: string
  identity_type: IdentityType
  identity_number: string
  identity_country: string
  address_country: string
  address_city: string
  address_street: string
  address_postal_code: string

  // Argentina conditional
  address_province?: ARProvince
  subject_comply?: boolean

  // Brazil conditional
  address_district?: string
  address_number?: string
  address_state?: BRState
  address_complement?: string

  // Chile conditional
  address_comune?: CLComune

  // Peru conditional
  civil_status?: CivilStatus
  spouse_name?: string
  pep?: boolean
  pep_position?: string
  pep_institution?: string
  pep_links_description?: string
  is_pep_family_member?: boolean
  pep_family_member_name?: string
  pep_family_member_relation?: string
}
