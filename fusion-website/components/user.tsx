import { authClient } from "@/lib/auth-client" // import the auth client
 
export function User(){
 
    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 
 
    return (
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {session && <p>Welcome, {session.user.email}!</p>}
            {!session && !isPending && <p>Please log in</p>}
        </div>
    )
}