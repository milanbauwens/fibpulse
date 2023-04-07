import { supabase } from "../../initSupabase";
import { getCurrentSession } from "../auth/api";

export const getMedicalProfile = async () => {
  const session = await getCurrentSession();
  const userID = session.user?.id;

  return await supabase
    .from("medical_profiles")
    .select("date_of_birth, gender, vkf_frequency, risk_factors")
    .eq("user_id", userID)
    .single()
    .throwOnError();
};
