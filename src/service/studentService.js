import { supabase } from "../supabase/supabaseclient";

export const getStudents = async () => {
  const { data, error } = await supabase.from("Student").select("*");
  if (error) throw error;
  console.log("RETORNANDO USUARIOS"+data);
  return data;
};

export const addStudent = async (student) => {
  const { data, error } = await supabase.from("Student").insert([student]);
  if (error) throw error;
  console.log("NUEVO USUARIO EXITOSO" + student);
  return data;
};

export const deleteStudent = async (id) => {
  const { data, error } = await supabase.from("Student").delete().eq("id", id);
  if (error) throw error;
    console.log("USUARIO ELIMINADO EXITOSO" + id);
  return data;
};
