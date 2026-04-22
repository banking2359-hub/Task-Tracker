import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { Image } from "react-native";


export default function OnBoardingScreen() {

    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: "#5e70b5",
                    image: <LottieView
                        autoPlay
                        loop
                        style={{ width: 400, height: 400 }}
                        source={require('../../assets/animation/setPlan.json')}
                    />,
                    title: "ADD ACTIVITY",
                    subtitle: "add activity you want to focus on"
                },
                {
                    backgroundColor: '#d36f86',
                    image: <LottieView
                        autoPlay
                        loop
                        source={require('../../assets/animation/study.json')}
                        style={{width:450,height:450}}
                    />,
                    title: "FOCUS TIME",
                    subtitle: "select a time you plane for your added task and start to achieve  it . "
                },
                {
                    backgroundColor: '#6dc16f',
                    image: <LottieView
                        autoPlay
                        source={require('../../assets/animation/checkList.json')}
                        style={{width:500,height:500}}
                    />,
                    title: "RECENT TASK",
                    subtitle: "see what task you seccesfully acomplish as your plane"
                },

            ]}
        />
    )
}