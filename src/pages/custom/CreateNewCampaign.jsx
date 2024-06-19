import { newCampaignIntro } from "@/data";
import SectionTitle from "./SectionTitle";

import CreateNewForm from "./Form";

const CreateNewCampaign = () => {
  return (
    <div>
      <div>
        <SectionTitle>{newCampaignIntro[0].title}</SectionTitle>
      </div>

      <div className="  max-w-[684px]">
        <CreateNewForm />
      </div>
    </div>
  );
};

export default CreateNewCampaign;
