import React,{Component} from 'react'
import {View,Text,Image,Button,WebView} from 'react-native'

export default class Product extends Component{
    render(){
        const {navigation}=this.props
        const {state}=navigation
        const {params}=state        
        return(
            <View style={{flex:1}}>
                {/* <WebView style={{height:600}} source={{uri: 'http://www.bestoffice.cn/BrowseGoods/Product.aspx?cInvCode=2989'}} /> */}
                
                <View style={{height:300}}>
                    <Text>这是商品页面12</Text>
                    <Text>获得的参数：{params.id}</Text>
                </View>
                <Button
                    title='返回'
                    onPress={()=>{
                        navigation.goBack()
                    }}
                />                
            </View>
        )
    }
}