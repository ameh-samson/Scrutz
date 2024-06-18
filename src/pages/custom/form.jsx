import React from "react";
import SectionTitle from "./SectionTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
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
import { useGlobalContext } from "@/context/Context";
import { newCampaignIntro } from "@/data";
import { newCampaignFormSchema } from "@/formsValidation";
import { toTitleCase, formatDate } from "@/lib/utils"; // Assuming formatDate is imported for date formatting
import api from "@/api";

const CreateNewForm = () => {
  const { newCampaign, setNewCampaign } = useGlobalContext();

  const form = useForm({
    resolver: zodResolver(newCampaignFormSchema),
    defaultValues: {
      campaignName: "",
      campaignDescription: "",
      startDate: "",
      endDate: "",
      digestCampaign: false,
      linkedKeywords: "",
      dailyDigest: "",
    },
  });

  // Function to handle form submission
  async function onSubmit(data) {
    try {
      // Convert date format to ISO 8601
      data.startDate = new Date(data.startDate).toISOString();
      data.endDate = new Date(data.endDate).toISOString();

      // Convert linkedKeywords to an array if needed
      data.linkedKeywords = [data.linkedKeywords];

      // Make a POST request to your API endpoint
      const response = await api.post("/Campaign", data);

      // Handle success, e.g., show a success message or redirect
      console.log("Form submitted successfully:", response.data);
      form.reset(); // Reset the form after successful submission
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error submitting form:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          {/* Campaign Name */}
          <FormField
            control={form.control}
            name="campaignName"
            render={({ field }) => (
              <FormItem>
                <div className="mt-8 md:mt-12 flex flex-col">
                  <FormLabel className="text-gray">Campaign Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g  The Future is now"
                      {...field}
                      className="mt-2 px-4 py-3 text-gray2"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campaign Description */}
          <FormField
            control={form.control}
            name="campaignDescription"
            render={({ field }) => (
              <FormItem>
                <div className="mt-8 md:mt-12 flex flex-col">
                  <FormLabel className="text-gray">
                    Campaign Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please add a description to your campaign"
                      {...field}
                      className="mt-2 px-4 py-3 text-gray2"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-6">
            {/* Start Date */}

            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <div className="mt-8 md:mt-12 flex flex-col">
                    <FormLabel className="text-gray">Start Date</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="dd/mm/yyyy"
                        {...field}
                        className="mt-2 px-4 py-3 text-gray2"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* End Date */}
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <div className="mt-8 md:mt-12 flex flex-col ">
                    <FormLabel className="text-gray">End Date</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="dd/mm/yyyy"
                        {...field}
                        className="mt-2 px-4 py-3 text-gray2"
                      />
                    </FormControl>
                  </div>
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
                <div>
                  <FormLabel className="text-gray">
                    Want to receive daily digest about the campaign?
                  </FormLabel>
                </div>
                <FormControl>
                  <div className="m-0">
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* Linked Keywords */}
          <FormField
            control={form.control}
            name="linkedKeywords"
            render={({ field }) => (
              <FormItem>
                <div className="mt-8 md:mt-12 flex flex-col">
                  <FormLabel className="text-gray">Linked Keywords</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="To add keywords, type your keyword and press enter"
                      {...field}
                      className="mt-2 px-4 py-3 text-gray2"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Select how often to receive daily digest */}
          <FormField
            control={form.control}
            name="dailyDigest"
            render={({ field }) => (
              <FormItem>
                <div className="mt-8 md:mt-12">
                  <FormLabel className="text-gray">
                    Kindly select how often you want to receive daily digest
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select"
                          className="text-gray2"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        {/* Buttons */}
        <div className="mt-10 md:mt-14 flex items-center gap-3">
          <Link href="/">
            <Button
              onClick={() => setNewCampaign(false)}
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
