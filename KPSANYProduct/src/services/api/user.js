/**
 * create by zx on 2018/12/18 18:46
 * 类注释：
 * 备注：
 */
import Http from '../http';

export default{
    /*登陆*/
    login(account,password){
        return Http.post('login/buyerlogin', {
            account: account,
            password: password
          })
    }
}