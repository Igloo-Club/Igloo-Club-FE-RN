import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import instance from '../apis/axiosInstance';
import {
  RELIGION,
  MARRIAGE_PLAN,
  SCALE,
} from '../../detail/constants/DETAIL_PROFILE_SELECTS';
import NungilModal from '../components/NungilModal';
import {DetailProfileDataTypesProps} from '../types/DetailProfileDataTypesProps';
import {
  BackArrow,
  ExitNungilButton,
  NungilButton,
} from '../../main/assets/0_index';
import {
  Height_,
  Religion_,
  Marriage_,
  Mbti_,
  Company,
  Location,
  Smoke,
  Tattoo,
  Hobby,
} from '../assets/0_index';
import {BlurView} from '@react-native-community/blur';

const DetailPage = ({navigation}: any) => {
  const {width, height} = useWindowDimensions();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isReceived, setIsReceived] = useState(false);
  const [detailProfile, setDetailProfile] =
    useState<DetailProfileDataTypesProps | null>(null);
  const route = useRoute();
  const {nungilId, from} = route.params as {nungilId: number; from?: string};
  useEffect(() => {
    const handleDetailProfile = async () => {
      try {
        const res = await instance.get(
          `/api/nungil/detail?nungilId=${nungilId}`,
        );
        setDetailProfile(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    handleDetailProfile();
  }, [nungilId]);

  if (!detailProfile) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}
        keyboardShouldPersistTaps="handled">
        <View style={[styles.imageContainer, {height: height * 0.4}]}>
          <Image
            source={{uri: detailProfile.imageUrlList?.[0]}}
            style={styles.image}
          />
          <BlurView
            style={[styles.blurOverlay, {height: height * 0.4}]}
            blurAmount={from === 'MainPage' || from === 'SendNungil' ? 15 : 0}
            reducedTransparencyFallbackColor="black">
            <TouchableOpacity
              onPress={() => {
                if (from === 'MainPage') {
                  navigation.navigate('MainPage');
                } else if (from === 'ReceivedNungil') {
                  navigation.navigate('NungilList', {tabIndex: 0});
                } else if (from === 'SendNungil') {
                  navigation.navigate('NungilList', {tabIndex: 1});
                } else if (from === 'SoonNungil') {
                  navigation.navigate('NungilList', {tabIndex: 2});
                } else {
                  navigation.goBack();
                }
              }}
              style={styles.arrow}>
              <BackArrow />
            </TouchableOpacity>
            {(from === 'SendNungil' || from === 'MainPage') && (
              <View style={styles.matchNoticeContainer}>
                <Text style={styles.matchNoticeTitle}>
                  눈길 매칭 시에만 프로필 사진이 공개돼요
                </Text>
                <Text style={styles.matchNoticeText}>
                  서로의 눈길이 닿아야만 프로필 사진을 볼 수 있어요
                </Text>
                <Text style={styles.matchNoticeText}>
                  상대방의 소개글을 유심히 읽어주세요
                </Text>
              </View>
            )}
            <View style={styles.imgBox}>
              <Text style={styles.imgText}>{detailProfile.nickname}</Text>
              <Text style={styles.imgAddText}>
                {new Date().getFullYear() -
                  parseInt(detailProfile.birthdate.substring(0, 4), 10)}
                세 | {detailProfile.companyName}
              </Text>
            </View>
          </BlurView>
        </View>
        <View>
          {from === 'ReceivedNungil' && (
            <View style={styles.noticeContainer}>
              <Text style={styles.noticeText}>
                상대방의 눈길이 도착했어요! 눈길 수락하기 버튼으로 답해봐요.
              </Text>
            </View>
          )}
        </View>
        <View style={styles.content}>
          <View style={styles.introBox}>
            <Text style={styles.introTitle}>저는요, 👋🏻</Text>
            <Text style={styles.introContent}>{detailProfile.intro}</Text>
          </View>
          <Text style={styles.title}>상대방에 대한 간단한 정보예요</Text>
          <View style={styles.infoBox}>
            <View style={styles.infoDetail}>
              <Company />
              <Text style={styles.infoText}>{detailProfile.companyName} |</Text>
              <Text style={styles.infoText}>{detailProfile.job} |</Text>
              <Text style={styles.infoText}>
                {SCALE.find(item => item.value === detailProfile.scale)
                  ?.label || '없음'}{' '}
                |
              </Text>
            </View>
            <View style={styles.infoDetail}>
              <Location />
            </View>
            <View style={styles.infoDetail}>
              <Height_ />
              <Text style={styles.infoText}>{detailProfile.height}cm |</Text>
              <Religion_ />
              <Text style={styles.infoText}>
                {RELIGION.find(item => item.value === detailProfile.religion)
                  ?.label || '없음'}{' '}
                |
              </Text>
              <Marriage_ />
              <Text style={styles.infoText}>
                {MARRIAGE_PLAN.find(
                  item => item.value === detailProfile.marriagePlan,
                )?.label || '미정'}{' '}
                |
              </Text>
              <Mbti_ />
              <Text style={styles.infoText}>{detailProfile.mbtiType}</Text>
            </View>
            <View style={styles.lastInfoDetail}>
              <Smoke />
              <Tattoo />
              <Hobby />
            </View>
          </View>
          <View style={styles.qnaBox}>
            <Text style={styles.title}>상대방이 작성한 1문 1답</Text>
            {detailProfile.questionAndAnswerList.map(list => (
              <View style={styles.qna}>
                <Text style={styles.qna_Q}>{list.questionTitle}</Text>
                <Text style={styles.qna_A}>{list.questionSubTitle}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {isModalOpen
        ? !isSent &&
          !isReceived && (
            <TouchableOpacity
              style={styles.nungilBtn}
              onPress={() => setIsModalOpen(false)}>
              <ExitNungilButton />
            </TouchableOpacity>
          )
        : from !== 'SoonNungil' && (
            <TouchableOpacity
              style={styles.nungilBtn}
              onPress={() => setIsModalOpen(true)}>
              <NungilButton />
            </TouchableOpacity>
          )}
      {isModalOpen && (
        <NungilModal
          nungilId={detailProfile?.nungilId}
          from={from}
          isSent={isSent}
          setIsSent={setIsSent}
          isReceived={isReceived}
          setIsReceived={setIsReceived}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {from === 'SoonNungil' && (
        <View style={styles.soonBox}>
          <TouchableOpacity style={[styles.soonBtn, {width: width * 0.8}]}>
            <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'bold'}}>
              인연 시작하기
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    position: 'relative',
  },
  imageContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  blurOverlay: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
    zIndex: 1000,
  },
  noticeContainer: {
    padding: 10,
    backgroundColor: '#FA7268',
  },
  noticeText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  matchNoticeContainer: {
    position: 'absolute',
    top: 130,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  matchNoticeTitle: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  matchNoticeText: {
    color: 'rgba(255, 255, 255, 0.80)',
    fontSize: 14,
    fontWeight: 'normal',
    paddingVertical: 2,
  },
  imgBox: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 20,
    bottom: 20,
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 15,
    zIndex: 20,
  },
  imgText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    paddingRight: 7,
  },
  imgAddText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'normal',
  },
  content: {
    padding: 25,
    paddingBottom: 0,
  },
  introBox: {
    flexDirection: 'column',
    padding: 20,
    marginBottom: 30,
    borderRadius: 15,
    gap: 7,
    backgroundColor: '#fafafb',
  },
  introTitle: {
    color: '#333944',
    fontSize: 14,
    fontWeight: 'bold',
  },
  introContent: {
    color: '#333944',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  infoBox: {
    paddingLeft: 10,
  },
  infoDetail: {
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ECEBF1',
  },
  lastInfoDetail: {
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 10,
    borderBottomWidth: 0,
  },
  infoText: {},
  title: {
    marginBottom: 25,
    fontSize: 18,
    fontWeight: 'bold',
  },
  qnaBox: {
    marginTop: 44,
  },
  qna: {
    padding: 24,
    paddingHorizontal: 20,
    borderRadius: 15,
    gap: 5,
    backgroundColor: '#fafafb',
  },
  qna_Q: {
    color: '#878D9B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  qna_A: {
    color: '#333A44',
    fontSize: 15,
    fontWeight: 'bold',
  },
  nungilBtn: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    zIndex: 2000,
  },
  soonBox: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  soonBtn: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#FA7268',
  },
});
