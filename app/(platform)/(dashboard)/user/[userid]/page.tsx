import { auth } from "@clerk/nextjs/server";
import { OrganizationSwitcher } from "@clerk/nextjs";

const userIdPage = () => {
    const {userId} = auth();
    return (
        <div>
            <OrganizationSwitcher />
        </div>
    );
}

export default userIdPage;