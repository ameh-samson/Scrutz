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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { WithContext as ReactTags } from "react-tag-input";

import { newCampaignFormSchema } from "@/formsValidation";
import api from "@/api";
import { useGlobalContext } from "@/context/Context";
import { parseDate } from "@/lib/utils";

const CreateNewForm = () => {
  const { setShowCampaignSuccessModal, fetchData } = useGlobalContext();

  const form = useForm({
    resolver: zodResolver(newCampaignFormSchema),
    defaultValues: {
      campaignName: "",
      campaignDescription: "",
      startDate: "",
      endDate: "",
      digestCampaign: false,
      linkedKeywords: [], // Array to store tags
      dailyDigest: "",
    },
  });

  // Function to handle form submission
  async function onSubmit(data) {
    try {
      data.startDate = new Date(parseDate(data.startDate)).toISOString();
      data.endDate = new Date(parseDate(data.endDate)).toISOString();

      const response = await api.post("/Campaign", data);

      form.reset();
      setShowCampaignSuccessModal(true);

      fetchData();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative space-y-8 overflow-x-hidden"
      >
        {/* Campaign Name */}
        <FormField
          control={form.control}
          name="campaignName"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-8 md:mt-12">
              <FormLabel className="text-gray">Campaign Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g  The Future is now"
                  {...field}
                  className="mt-2 px-4 py-3 text-gray2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campaign Description */}
        <FormField
          control={form.control}
          name="campaignDescription"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-8 md:mt-12">
              <FormLabel className="text-gray">Campaign Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please add a description to your campaign"
                  {...field}
                  className="mt-2 px-4 py-3 text-gray2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Start Date */}
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col mt-8 md:mt-12">
                <FormLabel className="text-gray">Start Date</FormLabel>
                <FormControl>
                  <Input
                    placeholder="dd/mm/yyyy"
                    {...field}
                    className="mt-2 px-4 py-3 text-gray2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Date */}
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col mt-8 md:mt-12">
                <FormLabel className="text-gray">End Date</FormLabel>
                <FormControl>
                  <Input
                    placeholder="dd/mm/yyyy"
                    {...field}
                    className="mt-2 px-4 py-3 text-gray2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Want to receive daily digest */}
        <FormField
          control={form.control}
          name="digestCampaign"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between mt-8 md:mt-12">
              <FormLabel className="text-gray">
                Want to receive daily digest about the campaign?
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Linked Keywords */}
        <FormField
          control={form.control}
          name="linkedKeywords"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-8 md:mt-12">
              <FormLabel className="text-gray">Linked Keywords</FormLabel>
              <FormControl>
                <div className="mt-2">
                  <ReactTags
                    tags={field.value.map((tag) => ({
                      id: tag,
                      text: tag,
                    }))}
                    handleDelete={(i) => {
                      const updatedTags = field.value.filter(
                        (tag, index) => index !== i
                      );
                      field.onChange(updatedTags);
                    }}
                    handleAddition={(tag) => {
                      const updatedTags = [...field.value, tag.text];
                      field.onChange(updatedTags);
                    }}
                    inputFieldPosition="inline"
                    placeholder="To add keywords, type your keyword and press enter"
                    classNames={{
                      tag: "bg-[#247B7B] text-white rounded px-2 py-1 mr-2",
                      tagInput: "text-gray2 py-3",
                      tagInputField:
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Select how often to receive daily digest */}
        <FormField
          control={form.control}
          name="dailyDigest"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-8 md:mt-12">
              <FormLabel className="text-gray">
                Kindly select how often you want to receive daily digest
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" className="text-gray2" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["Daily", "Weekly", "Monthly"].map((howOften) => (
                    <SelectItem value={howOften} key={howOften}>
                      {howOften}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Buttons */}
        <div className="mt-10 md:mt-14 flex items-center gap-3">
          <Link to="/campaign">
            <Button
              size="lg"
              variant="outline"
              className="border-darkCyan text-darkCyan hover:bg-darkCyan hover:text-white"
            >
              Cancel
            </Button>
          </Link>
          <Button size="lg" type="submit">
            Create Campaign
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateNewForm;
