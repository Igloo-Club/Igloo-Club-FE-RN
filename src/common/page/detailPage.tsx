import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
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

const DetailPage = ({navigation}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailProfile, setDetailProfile] =
    useState<DetailProfileDataTypesProps | null>(null);
  const route = useRoute();
  // const { nungilId } = route.params as { nungilId: number };

  // useEffect(() => {
  //   const handleDetailProfile = async () => {
  //     try {
  //       const res = await instance.get(
  //         `/api/nungil/detail?nungilId=${nungilId}`,
  //       );
  //       setDetailProfile(res.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   handleDetailProfile();
  // }, [nungilId]);

  // if (!detailProfile) {
  //   return (
  //     <SafeAreaView>
  //       <Text>Loading...</Text>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
          <BackArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.introBox}>
          <Text>저는요, 👋🏻</Text>
        </View>
        <Text style={styles.title}>상대방에 대한 간단한 정보예요</Text>
        <View style={styles.infoBox}>
          <View style={styles.infoDetail}>
            <Company />
            {/*<Text style={styles.infoText}>{detailProfile.companyName} |</Text>*/}
            {/*<Text style={styles.infoText}>{detailProfile.job} |</Text>*/}
            {/*<Text style={styles.infoText}>
              {SCALE.find(item => item.value === detailProfile.scale)
                ?.label || '없음'}{' '}
              |
            </Text>{' '}*/}
          </View>
          <View style={styles.infoDetail}>
            <Location />
          </View>
          <View style={styles.infoDetail}>
            <Height_ />
            {/*<Text style={styles.infoText}>{detailProfile.height}cm |</Text>*/}
            <Religion_ />
            {/*<Text style={styles.infoText}>
              {RELIGION.find(item => item.value === detailProfile.religion)
                ?.label || '없음'}{' '}
              |
            </Text>*/}
            <Marriage_ />
            {/*<Text style={styles.infoText}>
              {MARRIAGE_PLAN.find(
                item => item.value === detailProfile.marriagePlan,
              )?.label || '미정'}{' '}
              |
            </Text>*/}
            <Mbti_ />
            {/*<Text style={styles.infoText}>{detailProfile.mbtiType}</Text>*/}
          </View>
          <View style={styles.lastInfoDetail}>
            <Smoke />
            <Tattoo />
            <Hobby />
          </View>
        </View>
        <View style={styles.qnaBox}>
          <Text style={styles.title}>상대방이 작성한 1문 1답</Text>
          <View style={styles.qna}>
            <Text style={styles.qna_Q}>무슨 일을 하고 계세요?</Text>
            <Text style={styles.qna_A}></Text>
          </View>
        </View>
      </View>
      {isModalOpen ? (
        <TouchableOpacity
          style={styles.nungilBtn}
          onPress={() => setIsModalOpen(false)}>
          <ExitNungilButton />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.nungilBtn}
          onPress={() => setIsModalOpen(true)}>
          <NungilButton />
        </TouchableOpacity>
      )}
      {isModalOpen && (
        <NungilModal
          nungilId={detailProfile?.nungilId}
          closeModal={() => setIsModalOpen(false)}
        />
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
  top: {
    padding: 25,
    paddingBottom: 0,
  },
  content: {
    padding: 25,
    paddingBottom: 0,
  },
  introBox: {
    padding: 20,
    marginBottom: 30,
    borderRadius: 15,
    backgroundColor: '#fafafb',
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
    fontWeight: '700',
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
    fontWeight: 500,
  },
  qna_A: {
    color: '#333A44',
    fontSize: 15,
    fontWeight: 500,
  },
  nungilBtn: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    zIndex: 2000,
  },
});
