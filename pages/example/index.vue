<template> 
    <div class="md:min-h-screen h-full w-full md:flex block">
      <div class="w-full md:w-2/5 h-full md:h-full px-4 py-4 md:px-20 md:py-12 bg-white">
        <p class="text-orange-500 font-bold">{{ $t('tutorialOne') }}</p>
        <h2 class="prose prose-2xl font-bold text-black">{{ $t('playerList') }}</h2>
        <div class="w-full flex space-x-4 pt-2">
          <input v-model="name" :placeholder="$t('writeName')" class="w-3/4 input input-bordered input-neutral bg-white" @keyup.enter="addToList()" />
          <button @click="addToList()" class="w-1/4 btn btn-neutral !bg-[#4dabf7] text-white !border-[#4dabf7]">{{ $t('enter') }}</button>
        </div>
        <div class="mt-4 space-x-2 space-y-2">
          <div class="w-full flex justify-end pb-4">
            <p class="pr-4">{{ $t('totalCount', { count: list.length }) }}</p>
            <p @click="reset('player')">{{ $t('reset') }}</p>
          </div>
          <p
            v-for="person in list"
            class="badge badge-neutral badge-outline badge-lg cursor-pointer hover:border-blue-500 hover:border-2 hover:font-bold hover:text-blue-700 hover:p-3"
            @click="removePersonFromList(person)"
          >
            {{ person }}
            <i class="ri-close-line"></i>
          </p>
        </div>

        <p class="text-orange-500 font-bold mt-10">{{ $t('tutorialSecond') }}</p>
        <h2 class="prose prose-2xl font-bold text-black">{{ $t('teamLeaders') }}</h2>
        <div class="w-full flex space-x-4 pt-2">
          <input v-model="leaderInput" :placeholder="$t('writeNameNotRequired')" class="w-3/4 input input-bordered input-neutral bg-white" @keyup.enter="addToLeaderList()" />
          <button @click="addToLeaderList()" class="w-1/4 btn btn-neutral !bg-[#4dabf7] text-white !border-[#4dabf7]">{{ $t('enter') }}</button>
        </div>
        <div class="mt-4 space-x-2 space-y-2">
          <div class="w-full flex justify-end pb-4">
            <p class="pr-4">{{ $t('totalCount', { count: leaderList.length }) }}</p>
            <p @click="reset('leader')">{{ $t('reset') }}</p>
          </div>
          <p
            v-for="person in leaderList"
            class="badge badge-neutral badge-outline badge-lg cursor-pointer hover:border-blue-500 hover:border-2 hover:font-bold hover:text-blue-700 hover:p-3"
            @click="removePersonFromLeaderList(person)"
          >
            {{ person }}
          </p>
        </div>
  
        <p class="text-orange-500 font-bold pt-48 md:pt-24 pb-4">{{ $t('tutorialThird') }}</p>
        <div class="w-full flex space-x-4 pb-10 md:pb-0">
          <input v-model="teamCount" type="number" :placeholder="$t('teamCount')" class="w-1/4 !h-auto input input-bordered input-neutral bg-white" />
          <button @click="doneAndMakeList()" class="!w-3/4 btn btn-neutral btn-lg btn-wide !bg-[#4dabf7] text-white !border-[#4dabf7]">
            <p v-if="shuffleTeam == false">{{ $t('makeTeam') }}</p>
            <span v-else class="loading loading-spinner"></span>
          </button>
        </div>
  
        <!-- <button @click="myChunk(5)" class="w-1/4 btn btn-primary">FOR TEST!</button> -->
      </div>
      
      <div v-if="chunkedList.length > 0" class="w-full md:w-3/5 h-full md:min-h-screen bg-neutral-700 px-4 pt-16 pb-4 md:px-20 md:pt-12 md:pb-12">
        
        <p class="text-orange-500 font-bold">{{ $t('tutorialLast') }}</p>
        <h2 class="prose prose-2xl font-bold text-white dark:text-white">Team</h2>
        <div v-if="chunkedList.length > 0 && shuffleTeam == false" class="space-y-4 pt-2 mb-40 md:mb-0">
          <div v-for="team in chunkedList" class="shadow w-full py-4 px-4 bg-white rounded-lg space-x-2 space-y-2">
            <div class="flex justify-between">
              <p class="font-black text-black font-lg">TEAM. {{ team[0] }}</p>
              <p class="">{{ $t('totalCount', { count: team.length }) }}</p>
            </div>
            <div class="badge badge-success badge-lg  !bg-[#228be6] text-white !border-[#228be6]" v-for="person in team">{{ person }}</div>
          </div>
        </div>
        <div v-if="shuffleTeam == true" class="space-y-4 pt-2">
          <div v-for="skeleton in teamCount" class="skeleton h-22 w-full"></div>
        </div>
  
        <button @click="goToPlayGame()" v-if="chunkedList.length > 0" class="btn btn-neutral !bg-[#4dabf7] text-white !border-[#4dabf7] btn-lg btn-wide fixed bottom-10 md:bottom-20 w-[calc(100%-32px)] md:w-[calc(60%-160px)]">{{ $t('playGame') }}</button>
      </div>
    </div>
  </template>
  
  <script setup>
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n() 
  
    const name = ref('')
    const list = ref([
    "안유석", "황승욱", "하시혁", "정현식", "강희진", "탁재아", "권지연", "장민옥", "윤수호", "풍영철","오규혁", "최민국", "풍원미", "임민아", "성효선", "강광석", "남세영", "전하은", "류명원", "노병윤", "하호진", "남병욱", "고창원", "배준수", "예종연", "문태현", "예범철", "강하준", "남궁윤일", "임홍자"
    ])
    
    // const playerList = useState('usePlayerList')
    // const leaderList2 = useState('useLeaderList')
    // const teamCount2 = useState('useTeamCount')
    // const fixedTeam = useState('fixedTeam')
  
    const leaderInput = ref('')
    const leaderList = ref(["탁재아", "강광석", "류명원"])
  
    const teamCount = ref(3)
    const shuffleTeam = ref(false)
    const chunkedList = ref([])
  
    function reset(value) {
      const sure = confirm(t('sureReset'))
      if(sure) {
        if(value == 'player') list.value = [];
        if(value == 'leader') leaderList.value = [];
      }
    }
  
    function addToList() {
      if (name.value != '') {
        const duplIdx = list.value.indexOf(name.value)
        if (duplIdx == -1) {
          list.value.push(name.value)
        }
        name.value = ''
      }
    }
  
    function addToLeaderList() {
      if (leaderInput.value != '') {
        const duplIdx = leaderList.value.indexOf(leaderInput.value)
        if (duplIdx == -1) {
          leaderList.value.push(leaderInput.value)
        }
        leaderInput.value = ''
      }
    }
  
    function removePersonFromList(person) {
      const idx = list.value.indexOf(person)
  
      if (idx > -1) list.value.splice(idx, 1)
    }
  
    function removePersonFromLeaderList(person) {
      const idx = leaderList.value.indexOf(person)
  
      if (idx > -1) leaderList.value.splice(idx, 1)
    }
  
    function shuffle(originList) {
      let v = originList.sort(() => Math.random() - 0.5)
      return v
    }
  
    function splitToNChunks(array, n) {
      let result = []
      for (let i = n; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)))
      }
      return result
    }
  
    function doneAndMakeList() {
      if (teamCount.value > 0 && list.value.length > 0) {
        shuffleTeam.value = true
        chunkedList.value = []
  
        if (leaderList.value.length > 0) {
          leaderList.value.forEach((e) => {
            let idx = list.value.indexOf(e)
            if (idx > -1) {
              list.value.splice(idx, 1)
            }
          })
        }
  
        let originList = list.value.slice()
  
        let shuffledArr = shuffle(originList)
        console.log(shuffledArr)
        console.log(teamCount.value)
  
        setTimeout(() => {
          setTimeout(() => {
            let chunkedArr = splitToNChunks([...shuffledArr], teamCount.value)
            console.log(chunkedArr)
            if (leaderList.value.length > 0) {
              chunkedArr.map((item, index) => {
                item.unshift(leaderList.value[index])
              })
            }
            chunkedList.value = chunkedArr
  
            
            // playerList.value = list.value
            // leaderList2.value = leaderList.value
            // teamCount2.value = teamCount.value
            // fixedTeam.value = chunkedList.value
  
  
          }, 100)
          shuffleTeam.value = false
        }, 200)
      } else {
        alert(t('noCountOrList'))
      }
    }
  
    const router = useRouter()
  
    function goToPlayGame() {
        const fixedExamleTeam = useExFixedTeam()
        fixedExamleTeam.value = chunkedList.value
        router.push('/example/teamplay')
    }
  
    function goToExample() {
      router.push('/example')
    }
  </script>
  