import { newCampaignIntro } from "@/data"
import SectionTitle from "./SectionTitle"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'



import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { newCampaignForm } from '@/data'
import { newCampaignFormSchema } from "@/formsValidation"

const CreateNewCampaign = () => {
  const form = useForm({
    resolver: zodResolver(newCampaignFormSchema),
    defaultValues: {
      campaignName: '',
      campaignDescription: '',
      startDate: '',
      endDate: '',
      linkedKeywords: '',
      dailyDigest: '',
    },
  })

  // for testing form submission
  function onSubmit(data) {
    console.log(data)
    form.reset()
  }


  return (
    <div> 
      <SectionTitle>{newCampaignIntro[0].title}</SectionTitle>

      <div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div
        
        >
          {newCampaignForm.map((data, index) => (
            <div key={index}>
              <FormField
                control={form.control}
                name={data.name}
                render={({ field }) => (
                  <>
                    {/* input with text type */}
                    {data.inputType === 'text' && (
                      <FormItem>
                        <div className="mt-8 md:mt-12 flex flex-col">
                          <FormLabel>{data.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={data.placeholder}
                              {...field}
                              className="mt-2 px-4 py-3"
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}

                    {/* Input field with type radio */}
                    {data.inputType === 'radio' && (
                      <FormItem>
                        <div className="mt-8 md:mt-12">
                          <FormLabel>{data.label}</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange}>
                              {data.options?.map((option, inde) => (
                                <div
                                  key={index}
                                  className="mt-5 flex items-center space-x-2"
                                >
                                  <RadioGroupItem
                                    value={option}
                                    id={`r${option}`}
                                  />
                                  <Label htmlFor={`r${option}`}>{option}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}

                    {/* Input field with type select */}
                    {data.inputType === 'select' && (
                      <FormItem>
                        <div className="mt-8 md:mt-12">
                          <FormLabel>{data.label}</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={data.placeholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {data.options?.map((option, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="mt-5 flex items-center space-x-2"
                                  >
                                    <SelectItem value={option}>
                                      {option}
                                    </SelectItem>
                                  </div>
                                )
                              })}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}

                    {/* input with textarea type */}
                    {data.inputType === 'textarea' && (
                      <FormItem>
                        <div className="mt-8 md:mt-12 flex flex-col">
                          <FormLabel>{data.label}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={data.placeholder}
                              {...field}
                              className="mt-2 px-4 py-3"
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  </>
                )}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex items-center gap-3">
          <Link href="/">
            <Button size="sm">Cancel</Button>
          </Link>
          <Button size="sm" type="submit">
            Enroll Student
          </Button>
        </div>
      </form>
    </Form>
      </div>
    </div>
   
  )
}

export default CreateNewCampaign