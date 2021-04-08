  
import client from "../client";

export default {
    User : {
        totalFollowing : ({id}) => client.user.count({where : {
            followers : {
                some : {
                    id
                }
            }
        }}),
        totalFollowers : ({id}) => client.user.count({where : {
            following : {
                some : {
                    id
                }
            }
        }}),
        isMe : ({id}, _, {loggedInUser}) => {      // context는 세번째 argument 이므로 꼭 두번째 변수가 들어가야함
            if(!loggedInUser){
                return false;
            }
            return id === loggedInUser.id;            
        },
        isFollowing : async ({id}, _, {loggedInUser}) => {
            if(!loggedInUser){
                return false;
            }
            // sol 1
            /*const exists = await client.user
                .findUnique({where : {username : loggedInUser.username}})       // find log in user's name
                .following({where : {id}})                                      // 보고있는 사람을 팔로잉 했는지 확인;
            return exists.length !== 0;*/
            
            // sol 2
            const exists = client.user.count({where : {username : loggedInUser.username,
            following : {
                some : {
                    id
                }
            }}});
            return Boolean(exists);
        }
    }
}