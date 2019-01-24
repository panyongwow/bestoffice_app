import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Modal,
    PixelRatio,
    View,
    TouchableOpacity
} from 'react-native';


export class ModalDemo extends Component {

    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
            animationType: 'slide',//none slide fade
            modalVisible: false,//模态场景是否可见
            transparent: true,//是否透明显示
        };
    }

    render() {
        // let modalBackgroundStyle = {
        //     backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
        // };
        let innerContainerTransparentStyle = this.state.transparent
            ? { backgroundColor: '#fff', padding: 20 }
            : null;

        return (

            <View style={{ alignItems: 'center', flex: 1 }}>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this._setModalVisible(false) }}
                // onShow={this.startShow}
                >
                    <View style={{flex:1,flexDirection:'column-reverse',backgroundColor:'rgba(0, 0, 0, 0.1)'}}
                    >
                        <View style={{backgroundColor:'#fff',height:200}}>
                            <Text
                                onPress={this._setModalVisible.bind(this, false)}
                                style={{ fontSize: 20, marginTop: 10 }}>
                                关闭
                            </Text>
                        </View>
                        <TouchableOpacity 
                            onPress={this._setModalVisible.bind(this, false)}
                        >
                        <View style={{height:300}}></View>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <Text style={{ fontSize: 30, color: 'red' }} onPress={this._setModalVisible.bind(this, true)}>显示</Text>


            </View>
        );
    }


    _setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    startShow = () => {
        alert('开始显示了');
    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',

        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 18,
        margin: 5,
        textAlign: 'center',
    },

    page: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
    },
    zhifu: {
        height: 150,
    },

    flex: {
        flex: 1,
    },
    at: {
        borderWidth: 1 / PixelRatio.get(),
        width: 80,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#18B7FF',
        height: 1,
        marginTop: 10

    },
    date: {
        textAlign: 'center',
        marginBottom: 5
    },
    station: {
        fontSize: 20
    },
    mp10: {
        marginTop: 5,
    },
    btn: {
        width: 60,
        height: 30,
        borderRadius: 3,
        backgroundColor: '#FFBA27',
        padding: 5,
    },
    btn_text: {
        lineHeight: 18,
        textAlign: 'center',
        color: '#fff',
    },
});
