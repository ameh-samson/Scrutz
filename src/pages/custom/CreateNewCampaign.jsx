import SectionTitle from "./SectionTitle";

import CreateNewForm from "./Form";

const CreateNewCampaign = () => {
  return (
    <div>
      <div>
        <SectionTitle>Create New Campaign</SectionTitle>
      </div>

      <div className="  max-w-[684px]">
        <CreateNewForm />
      </div>
    </div>
  );
};

export default CreateNewCampaign;
