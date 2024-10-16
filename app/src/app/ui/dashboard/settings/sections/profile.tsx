import EditForm from "../../profile/edit/edit-form";

export default function ProfileSection({user}: {user: any}) {
    return <EditForm user={{user}} />
}