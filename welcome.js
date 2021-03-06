import React,{Component} from 'react'
import {View,Text,StyleSheet,Button,Image} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as shoppingcartActions from './app/actions/shoppingcartAction'
import HomePageDao from './app/dao/homepage'
import ShoppingcartDao from './app/dao/shoppingcart'
import {NavigationActions} from 'react-navigation'
import Foot from './app/components/foot'
import Loading from './app/components/loading'

// const resetAction=NavigationActions.navigate({
//     index:0,
//     actions:[
//         NavigationActions.navigate({routeName:'Main'})
//     ]
// })
class Welcome extends Component{
    //这样写就不行，不加props参数，安装到手机上后会闪退
    // constructor(){
    //     super()
    // }

    constructor(props){
       super(props)
    }

    
    componentDidMount(){
        const {navigation}=this.props
        // HomePageDao.init(()=>{
        //     navigation.reset([NavigationActions.navigate({ routeName: 'Main' })], 0)  
        // })
        HomePageDao.init()
            .then(()=>ShoppingcartDao.getCartNum())
            .then(cartnum=>{this.props.shoppingcartActions.shoppingcart_init(cartnum)})
            .then(()=>navigation.reset([NavigationActions.navigate({ routeName: 'Main' })], 0)  )
            .catch(e=>alert(e))
    }
    render(){
        const {navigation}=this.props
        return(
            <View style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
                <Image style={{height:40,width:40}} source={require('./app/res/images/logo_2.png')} />
                <Text style={{marginTop:10}}>办公购物百思不解其通？</Text>
                <Text style={{marginBottom:40}}>立即登录百思通办公！</Text>
                <Loading />
                <Foot />
                {/* <Button
                    onPress={()=>{
                        navigation.navigate("Main")
                    }}
                    title="跳转"
                /> */}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    }
})

function mapStateToProps(state){
    return{}
}
function mapDispatchToProps(dispatch){
    return {
        shoppingcartActions:bindActionCreators(shoppingcartActions,dispatch)
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Welcome)