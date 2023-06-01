import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Home' | 'Profile'>;

export type RouteProps = ScreenProps['route'];
export type NavigationProps = ScreenProps['navigation'];

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
