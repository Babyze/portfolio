"use client";
import Page from "@/components/Page";
import LittleAstronaut from "@/components/ui/LitttleAstronaut";
import SendEmailFormAction, {
  contactFormSchema,
  ContactFormSchemaType,
} from "@/actions/SendEmailFormAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { GoRocket } from "react-icons/go";
import { IoMail } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { toast } from "sonner";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormSchemaType) {
    try {
      await SendEmailFormAction(values);
      toast.success("Your message has been launched.");
    } catch (error) {
      toast.error("Err. Something wrong with the rocket.");
      console.log(error);
    } finally {
      reset();
    }
  }

  return (
    <Page id="contact" className="xl:px-20 mt-20">
      <h1 className="text-secondary">Contact me</h1>

      <section className="flex flex-col md:flex-row justify-center md:justify-between mt-12 md:mt-10 lg:mt-3 mb-10 items-center">
        <div className="flex flex-col pr-1 lg:basis-2/3 gap-5 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-5">
              <Input
                {...register("name")}
                type="text"
                label="Your name"
                placeholder="Alex"
                labelPlacement="outside"
                size="lg"
                variant="bordered"
                color="secondary"
                startContent={
                  <IoMail className="text-2xl pointer-events-none flex-shrink-0 text-secondary" />
                }
                className="basis-1/2"
                isInvalid={!!errors.name?.message}
                errorMessage={errors.name?.message}
                classNames={{
                  inputWrapper: ["data-[hover=true]:border-secondary"],
                }}
              />
              <Input
                {...register("email")}
                type="email"
                label="Your email"
                placeholder="you@example.com"
                labelPlacement="outside"
                size="lg"
                variant="bordered"
                color="secondary"
                startContent={
                  <MdAccountCircle className="text-2xl pointer-events-none flex-shrink-0 text-secondary" />
                }
                className="basis-1/2"
                classNames={{
                  inputWrapper: ["data-[hover=true]:border-secondary"],
                }}
                isInvalid={!!errors.email?.message}
                errorMessage={errors.email?.message}
              />
            </div>

            <Textarea
              {...register("message")}
              label="Message"
              placeholder="Hi! How are you"
              size="lg"
              minRows={9}
              variant="bordered"
              color="secondary"
              className="w-full mt-5 md:mt-3 h-42"
              classNames={{
                inputWrapper: ["data-[hover=true]:border-secondary"],
              }}
              isInvalid={!!errors.message?.message}
              errorMessage={errors.message?.message}
            />

            <Button
              type="submit"
              color="secondary"
              size="lg"
              radius="full"
              className="w-full mt-10 bg-transparent border-2 border-secondary hover:bg-secondary hover:text-white"
              endContent={<GoRocket />}
              isLoading={isSubmitting}
            >
              Send to Spaceship
            </Button>
          </form>
        </div>

        <div className="h-[250px] md:h-[350px] lg:h-[550px] w-full md:basis-1/3 order-first md:order-none">
          <LittleAstronaut />
        </div>
      </section>
    </Page>
  );
}
