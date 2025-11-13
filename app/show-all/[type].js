import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import {
  ScreenHeaderBtn,
  NearbyJobCard,
  PopularJobCard,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "../../styles/search";
import useFetch from "../../hook/useFetch";

const JobSearch = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key":
            "bfadb1b092msh71c3cc03a343fb0p13a1cfjsn76fc71fd9623",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: "React developer",
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  ListHeaderComponent = () => (
    <>
      <View style={styles.container}>
        <Text style={styles.searchTitle}>{params.type}</Text>
        <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
      </View>
      <View style={styles.loaderContainer}>
        {searchLoader ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          searchError && <Text>Oops something went wrong</Text>
        )}
      </View>
    </>
  );

  ListFooterComponent = () => (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.paginationButton}
        onPress={() => handlePagination("left")}
      >
        <Image
          source={icons.chevronLeft}
          style={styles.paginationImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.paginationTextBox}>
        <Text style={styles.paginationText}>{page}</Text>
      </View>
      <TouchableOpacity
        style={styles.paginationButton}
        onPress={() => handlePagination("right")}
      >
        <Image
          source={icons.chevronRight}
          style={styles.paginationImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );

  const [selectedJob, setSelectedJob] = useState();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{
          padding: SIZES.medium,
          rowGap: SIZES.medium,
        }}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
