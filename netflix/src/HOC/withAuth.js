import React, {useEffect,useState} from 'react';
import { useRouter } from 'next/router'

const withAuth = (WrappedComponent) => {
    return (props)=>{

        const Router = useRouter();
        const [authVerified, setAuthVerified] = useState(false);

        useEffect( () => {
            const token = localStorage.getItem('netflix_user');
            if(!token) {
                Router.push("/login")
            }
            else{
                setAuthVerified(true)
            }
        }, [Router]);
        if(authVerified) {
            return <WrappedComponent {...props} />
        }
        else {
            return null;
        }

    }
};

export default withAuth;