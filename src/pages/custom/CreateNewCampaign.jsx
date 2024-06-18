import { newCampaignIntro } from "@/data";
import SectionTitle from "./SectionTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { newCampaignForm } from "@/data";
import { newCampaignFormSchema } from "@/formsValidation";
import { useGlobalContext } from "@/context/Context";
import CreateNewForm from "./form";

const CreateNewCampaign = () => {
  const { newCampaign, setNewCampaign } = useGlobalContext();

  const form = useForm({
    resolver: zodResolver(newCampaignFormSchema),
    defaultValues: {
      campaignName: "",
      campaignDescription: "",
      startDate: "",
      endDate: "",
      linkedKeywords: "",
      dailyDigest: "",
    },
  });

  // for testing form submission
  function onSubmit(data) {
    console.log(data);
    form.reset();
  }

  return (
    <div>
      <div>
        <SectionTitle>{newCampaignIntro[0].title}</SectionTitle>
      </div>

      <div className="max-w-2xl overflow-y: auto">
        <CreateNewForm />
      </div>
    </div>
  );
};

export default CreateNewCampaign;
