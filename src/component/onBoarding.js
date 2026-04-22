import Onboarding from "react-native-onboarding-swiper";
import { Image } from "react-native";

export default function OnBoardingScreen() {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: "#5e70b5",
                    Image: <Image source={require('../../assets/favicon.png')} />,
                    title: "Focus Time",
                    subtitle: "How much time you can stay focus"
                },
                {
                    backgroundColor: '#d36f86',
                    Image: <Image source={require('../../assets/favicon.png')} />,
                    title: "Focus Time",
                    subtitle: "How much time you can stay focus"
                },
                {
                    backgroundColor: '#8adf22',
                    Image: <Image source={require('../../assets/favicon.png')} />,
                    title: "Focus Time",
                    subtitle: "How much time you can stay focus"
                },

            ]}
        />
    )
}