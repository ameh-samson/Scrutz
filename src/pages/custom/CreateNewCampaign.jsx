import { newCampaignIntro } from "@/data";
import SectionTitle from "./SectionTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { newCampaignFormSchema } from "@/formsValidation";
import { useGlobalContext } from "@/context/Context";
import CreateNewForm from "./Form";

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

  return (
    <div>
      <div>
        <SectionTitle>{newCampaignIntro[0].title}</SectionTitle>
      </div>

      <>
        <CreateNewForm />
      </>
    </div>
  );
};

export default CreateNewCampaign;
