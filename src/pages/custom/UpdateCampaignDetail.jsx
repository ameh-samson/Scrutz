import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { formatDate } from "@/lib/utils";
import { IoMdArrowBack } from "react-icons/io";
import SectionTitle from "./SectionTitle";
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
import { newCampaignFormSchema } from "@/formsValidation";
import { useGlobalContext } from "@/context/Context";

const UpdateCampaignDetail = () => {
  const { id } = useParams();
  const { fetchCampaignDetails, campaignDetail, setCampaignDetail } =
    useGlobalContext();
  const [isEditable, setIsEditable] = useState(false);

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

  useEffect(() => {
    const getCampaignDetails = async () => {
      const details = await fetchCampaignDetails(id); // Fetch campaign details by ID
      form.reset({
        campaignName: details.campaignName || "",
        campaignDescription: details.campaignDescription || "",
        startDate: formatDate(details.startDate) || "",
        endDate: formatDate(details.endDate) || "",
        digestCampaign: details.digestCampaign || false,
        linkedKeywords: details.linkedKeywords || "",
        dailyDigest: details.dailyDigest || "",
      });
    };

    getCampaignDetails();
  }, [id, fetchCampaignDetails, form]);

  async function onSubmit(data) {
    try {
      data.startDate = new Date(parseDate(data.startDate)).toISOString();
      data.endDate = new Date(parseDate(data.endDate)).toISOString();
      data.linkedKeywords = [data.linkedKeywords];

      const response = await api.put(`/Campaign/${id}`, data); // Change post to put and include the campaign ID in the URL

      console.log("Form submitted successfully:", response.data);
      form.reset();
      setShowCampaignSuccessModal(true);

      fetchData();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  if (!campaignDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Link to="/campaign">
          <button className="flex items-center">
            <IoMdArrowBack /> Back
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <SectionTitle>Campaign Information</SectionTitle>

        <span className="block rounded bg-lightGrayish2 py-2 px-4">
          Campaign Status |{" "}
          <span
            className={`${
              campaignDetail.campaignStatus === "Active"
                ? "text-green-600"
                : campaignDetail.campaignStatus === "Inactive"
                ? "text-red"
                : ""
            }`}
          >
            {campaignDetail.campaignStatus}
          </span>
        </span>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <>
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
                        readOnly={!isEditable}
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
                        readOnly={!isEditable}
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
                          readOnly={!isEditable}
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
                          readOnly={!isEditable}
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
                  <>
                    <FormLabel className="text-gray">
                      Want to receive daily digest about the campaign?
                    </FormLabel>
                  </>
                  <FormControl>
                    <div className="m-0">
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        readOnly={!isEditable}
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
                        readOnly={!isEditable}
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
                            readOnly={!isEditable}
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
          </>

          {/* Buttons */}
          <div className="mt-10 md:mt-14 flex items-center gap-3">
            <Link>
              <Button size="lg" className="bg-red hover:bg-red/90">
                Stop Campaign
              </Button>
            </Link>

            <Button
              type="submit"
              size="lg"
              variant="outline"
              className=" border-darkCyan text-darkCyan"
            >
              {isEditable ? "Save Information" : "Edit Information"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdateCampaignDetail;
