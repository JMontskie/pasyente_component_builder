// Login schema
export type HcwLoginFormValues = {
    username: string;
    password: string;
    remember_me: boolean;
  };
  
  // Hcf Registration schema
  export type HcfRegistrationFormValues = {
    hcf_name: string;
    hcf_address: string;
    hcf_email: string;
    hcf_phone_number: string;
    hcf_recipient_name: string;
    hcf_message?: string;
  };
  
  // Physician Account Registration form schema
  export type PhysicianRegistrationFormValues = {
    username: string;
    password: string;
    email?: string;
    phone_number: string;
    confirm_password: string;
  };
  
  // Physician Profile Registration form schema
  export type PhysicianProfileRegistrationFormValues = {
    first_name: string;
    last_name: string;
    middle_name?: string;
    birthdate: string;
    sex_at_birth: string;
    region: Psgc;
    province: Psgc;
    municipality: Psgc;
    barangay: Psgc;
    zip_code: string;
    profession: string;
    specialization: string;
    accept_terms: boolean;
    hcw_verification_uploaded_id_front?: File,
    hcw_verification_selfie?: File,
    hcw_verification_expiry_date: string;
    verification_files: FileList,
  };
  
  // Physician Submit Registration schema
  
  // PSGC schema -- this is also the schema from the database
  export type Psgc = {
    psgc_id: number;
    psgc_name: string;
    psgc_name_2?: string | null;
    psgc_name_3?: string | null;
    psgc_parent?: string | null;
    psgc_jurisdiction: string;
  };
  
  // Update Password schema
  export type UpdatePasswordValues = {
    password: string;
    confirm_password: string;
  };
  