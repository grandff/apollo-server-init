import client from "../../client"
import bcrypt from "bcrypt";

export default {
    Mutation : {
        createAccount : async (_, {       // 멀티커서 단축키 : cmd + shift + L
            firstName,
            lastName,
            username,
            email,
            password
        }) => {
            try{
                // check if username or email are already on db
                const existingUser = await client.user.findFirst({
                    where : {
                        OR : [
                            {
                                username
                            },
                            {
                                email
                            }
                        ]
                    }
                });

                if(existingUser) {
                    throw new Error("This username/password is already taken.");
                }
                
                // hash password
                const uglyPassword = await bcrypt.hash(password, 10);

                // save user
                await client.user.create({data : {
                    username, email, firstName, lastName, password : uglyPassword
                }});

                // return result
                return {
                    ok : true,
                };
            }catch (e){
                return{
                    ok : false,
                    error : "Cant create account"
                }
            }
        },        
    }
}