import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem } 
    from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response);
                // 뮤테이션에 데이터 넘기기
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => console.log(error))
    },
    // 디스트럭처링 {  }
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => commit('SET_JOBS', data))
            .catch(error => console.log(error));
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data)
            })
            .catch(error => console.log(error));
    },
    FETCH_USER({ commit }, userName ){
        fetchUserInfo(userName)
            .then(({ data })=>{
                commit('SET_USER',data)
            })
            .catch(error => console.log(error));
    },
    FETCH_ITEM({ commit }, id){
        fetchCommentItem(id)
            .then(( { data } ) => {
                commit('SET_ITEM',data);
            })
            .catch(error => console.log(error));
    }
}