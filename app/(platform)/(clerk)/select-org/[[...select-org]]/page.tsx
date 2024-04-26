import { OrganizationList } from "@clerk/nextjs"; 

export default function CreateOrganizationPage() {
    return (
        <OrganizationList 
            afterSelectOrganizationUrl="/organization/:slug"
            afterCreateOrganizationUrl="/organization/:slug"
            afterSelectPersonalUrl="/user/:id"
        />
    );
};