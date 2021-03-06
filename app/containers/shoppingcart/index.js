import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, Image, TextInput, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import NumInput from '../../components/numInput'
import Tag from '../../components/tag'
import ProductSmall from '../../components/product/small'
import ShoppingCartDao from '../../dao/shoppingcart'

export default class ShoppingCart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //selected: false,
            total:0,    //购物车选中的商品总价
            data: []
        }
        //this.flatRenderItem=this.flatRenderItem.bind(this)
    }

    componentDidMount() {
        // ShoppingCartDao.get()
        //     .then(data=>{
        //         this.setState({
        //             data
        //         })
        //     })
        this.setState({
            data: [
                { "id": 11655, "name": "UPM奥友80G A4 高白复印纸", "measurement": "包", "cartnum": 1, "price": 309999.3, "picname": "http://img.bestoffice.cn/product/84/11655/f49bf7ef5581c33b4fc5f39edc3af9b9_s.jpg" },
                { "id": 320, "name": "晨光 0.5创意中性笔GP-1008(黑色)", "measurement": "支", "cartnum": 2, "price": 2.2, "picname": "http://img.bestoffice.cn/product/25/320/42741d0e6233801ef63213bb4ae2818e_s.jpg" },
                { "id": 320, "name": "惠普 HP 青色硒鼓C9701A（适用机型：HP Color LaserJet 1500, 2500 系列）", "measurement": "支", "cartnum": 999, "price": 2.2, "picname": "http://img.bestoffice.cn/product/25/320/42741d0e6233801ef63213bb4ae2818e_s.jpg" },
                { "id": 11655, "name": "UPM奥友80G A4 高白复印纸", "measurement": "包", "cartnum": 1, "price": 30.3, "picname": "http://img.bestoffice.cn/product/84/11655/f49bf7ef5581c33b4fc5f39edc3af9b9_s.jpg" },
                { "id": 320, "name": "晨光 0.5创意中性笔GP-1008(黑色)", "measurement": "支", "cartnum": 2, "price": 2.2, "picname": "http://img.bestoffice.cn/product/25/320/42741d0e6233801ef63213bb4ae2818e_s.jpg" },
                { "id": 320, "name": "惠普 HP 青色硒鼓C9701A（适用机型：HP Color LaserJet 1500, 2500 系列）", "measurement": "支", "cartnum": 999, "price": 2.2, "picname": "http://img.bestoffice.cn/product/25/320/42741d0e6233801ef63213bb4ae2818e_s.jpg" },
                { "id": 11655, "name": "UPM奥友80G A4 高白复印纸", "measurement": "包", "cartnum": 1, "price": 30.3, "picname": "http://img.bestoffice.cn/product/84/11655/f49bf7ef5581c33b4fc5f39edc3af9b9_s.jpg" },
                { "id": 320, "name": "晨光 0.5创意中性笔GP-1008(黑色)", "measurement": "支", "cartnum": 2, "price": 2.2, "picname": "http://img.bestoffice.cn/product/25/320/42741d0e6233801ef63213bb4ae2818e_s.jpg" },
                { "id": 320, "name": "惠普 HP 青色硒鼓C9701A（适用机型：HP Color LaserJet 1500, 2500 系列）", "measurement": "支", "cartnum": 999, "price": 2.2, "picname": "http://img.bestoffice.cn/product/25/320/42741d0e6233801ef63213bb4ae2818e_s.jpg" },
            ]
        })
    }
    flatRenderItem(item) {
        return (
            <TouchableOpacity
                style={{ backgroundColor: '#fff', height: 100, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 0, borderColor: 'red', padding: 10 }}
                onPress={() => {
                    alert(item.id+','+item.cartnum)
                }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ width: 18, height: 18, borderWidth: 1, borderColor: 'gray', borderRadius: 9 }}
                    onPress={() => {
                        this.setState({
                            selected: !this.state.selected
                        })
                    }}
                />
                <View style={styles.imageborder}>
                    <Image style={styles.image} source={{ uri: item.picname }} />
                </View>
                <View style={styles.productborder}>
                    <View>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.productname}
                        >
                            {item.name}
                        </Text>
                    </View>
                    {/* <View> */}
                    <View style={styles.border} >
                        <View style={[styles.priceborder, { borderColor: 'red', borderWidth: 0 }]} >
                            <Text style={styles.pricepre}>&yen;</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.measurement}>/{item.measurement}</Text>
                        </View>
                        <NumInput 
                            value={item.cartnum} 
                            onChange={(num)=>{item.cartnum=num}}
                        />
                        {/* <TouchableOpacity style={{borderColor:'red',borderWidth:0}}>
                                <Tag title='移除' />
                            </TouchableOpacity> */}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    numChange(num){
        alert(num)
    }
    render() {
        //const {navigation}=this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff' }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', lineHeight: 40, backgroundColor: '#f3f3f3' }}>购物车</Text>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                        <TouchableOpacity
                            style={{ width: 70, height: 26, borderWidth: 1, borderColor: '#f3f3f3', borderRadius: 13 }}
                        >
                            <Text style={{ textAlign: 'center', lineHeight: 24, fontSize: 12 }}>登 录</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, marginLeft: 10 }}>登录后将同步手机与电脑购物车中的商品</Text>
                    </View>
                </View>
                <View style={{ height: 2, backgroundColor: '#f3f3f3' }}></View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        ref='ShoppingCart'
                        data={this.state.data}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => { return this.flatRenderItem(item) }}
                        ItemSeparatorComponent={() =>
                            <View style={{ height: 2, backgroundColor: '#f3f3f3' }}></View>
                        }
                    />
                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{flexDirection:'column',justifyContent:'space-between', flex:1.3,paddingLeft: 10}}>
                            <View style={{  flexDirection: 'row',paddingTop:8,paddingBottom:5}}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{ width: 18, height: 18, borderWidth: 1, borderColor: 'gray', borderRadius: 9 }}
                                    onPress={() => {
                                    }}
                                />
                                <Text style={{ marginLeft: 10 }}>全选</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12 }}>合计:&nbsp;<Text>&yen;&nbsp;{this.state.total}</Text></Text>
                            </View>
                        </View>
                        {/* <View style={{ flex: 2, alignItems: 'center' }}>
                            <Text style={{ fontSize: 18 }}>合计:&nbsp;<Text>&yen;&nbsp;999999.99</Text></Text>
                        </View> */}
                        <TouchableOpacity
                            style={{ backgroundColor: '#f00', height: 50, flex: 0.8, alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={{ color: '#fff' }}>移除</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ backgroundColor: '#f00', height: 50, flex: 1.3, alignItems: 'center', justifyContent: 'center', borderLeftWidth: 1, borderLeftColor: '#fff' }}
                        >
                            <Text style={{ color: '#fff' }}>去结算(999)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* {
                    this.state.selected
                        ? <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                this.setState({
                                    selected: !this.state.selected
                                })
                            }}
                        >
                            <AntDesign name='checkcircle' size={20} color='red' />
                        </TouchableOpacity>
                        : <TouchableOpacity
                            activeOpacity={1}
                            style={{ width: 20, height: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}
                            onPress={() => {
                                this.setState({
                                    selected: !this.state.selected
                                })
                            }}
                        />
                } */}
            </View>



        )
    }
}

const styles = StyleSheet.create({
    image: {
        // height: 96,
        // width: 114,
        height: 60,
        width: 60,
    },
    imageborder: {
        //flex: 1,
        paddingLeft: 10,
        paddingRight: 5,
        borderWidth: 0,
        borderColor: 'red'
    },
    productborder: {
        flex: 1,
        flexDirection: 'column',
        height: 90,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between'
    },
    productname: {
        fontSize: 14,
        width: '100%'
    },
    border: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceborder: {
        flexDirection: 'row',
        alignItems: 'baseline',
        //marginTop: 10,
        //flex:1

    },
    pricepre: {
        color: 'red',
        fontSize: 10,
        paddingBottom: 2
    },
    price: {
        color: 'red',
        fontSize: 15,
        marginLeft: 3
    },
    measurement: {
        fontSize: 10,
        color: '#bebebe',
        paddingBottom: 2
    },
})