import { signIn } from "@junobuild/core";

const Login = () => {

    const handleIIAuth = async () => {
        //Authenticate Internet Identity here
        await signIn();
    };

  return (
        <div className='button' onClick={handleIIAuth}>Login</div>
  )
}

export default Login