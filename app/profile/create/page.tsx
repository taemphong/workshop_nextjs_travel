import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CreateProfileAction = async (formData: FormData) => {
  "use server";
  const firstname = formData.get("firstname") as string;
  console.log("CreateProfile", firstname);
};

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <form action={CreateProfileAction}>
          <div className="mb-2">
            <Label>First Name</Label>
            <Input name="firstname" type="text" />
          </div>
          <Button type="submit">create Profile</Button>
        </form>
      </div>
    </section>
  );
};

export default CreateProfile;
