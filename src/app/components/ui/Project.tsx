import { useIsMobile } from "@/hooks/useIsMobile";
import { cm } from "@/lib/utils";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  Image as NextUIImage,
  Link as NextLink,
} from "@nextui-org/react";

export interface ProjectPops {
  title: string;
  description: string;
  imageUrl?: string;
  role?: string | string[];
  techStack: string | string[];
  repoUrl?: string;
}

export default function Project({
  title,
  description,
  role,
  imageUrl,
  techStack,
  repoUrl,
}: ProjectPops) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMobile } = useIsMobile();

  return (
    <>
      <div
        className="border-2 border-none hover:ring-secondary ring-primary ring-2 rounded-md hover:shadow-lg hover:shadow-secondary cursor-pointer"
        onClick={() => onOpen()}
      >
        <div className="flex flex-col w-full">
          {imageUrl && (
            <div>
              <NextUIImage
                src={imageUrl}
                alt={title}
                height={isMobile ? 200 : 300}
                radius="none"
                removeWrapper
                className="object-fill w-full rounded-t-md"
              />
            </div>
          )}

          <div className="p-6">
            <p className="text-xl md:text-4xl text-secondary">{title}</p>
            <p className="mt-5 text-sm text-pretty md:text-lg line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </div>

      <Modal backdrop="blur" size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalBody className="mt-6">
              <h4 className="my-3">{title}</h4>

              <div className="grid grid-rows-1 md:grid-cols-4 gap-5 mb-5 text-md md:text-xl">
                <InformationModal
                  title="DESCRIPTION"
                  classNames="bg-secondary md:flex items-center justify-center w-full md:px-2 md:col-span-1"
                >
                  {description}
                </InformationModal>

                {role && (
                  <InformationModal title="ROLE">
                    {Array.isArray(role) ? role.join(", ") : role}
                  </InformationModal>
                )}

                <InformationModal title="TECH STACK">
                  {Array.isArray(techStack) ? techStack.join(", ") : techStack}
                </InformationModal>

                {repoUrl && (
                  <InformationModal title="REPOSITORY">
                    <NextLink href={repoUrl} showAnchorIcon color="secondary">
                      Click here
                    </NextLink>
                  </InformationModal>
                )}
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

function InformationModal({
  title,
  children,
  classNames,
}: {
  title: string;
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <>
      <div
        className={cm([
          "bg-secondary md:text-center px-2 md:col-span-1",
          classNames,
        ])}
      >
        {title}
      </div>
      <div className="md:col-span-3">{children}</div>
    </>
  );
}
