<template>
  <div class="h-screen w-full md:flex block">
    <div class="w-full md:w-2/5 h-full px-10 py-4 md:px-20 md:py-12 bg-white">
      <h2 class="prose prose-2xl font-bold text-black">명단</h2>
      <div class="w-full flex space-x-4 pt-2">
        <input v-model="name" placeholder="이름 입력" class="w-3/4 input input-bordered input-neutral bg-white" @keyup.enter="addToList()" />
        <button @click="addToList()" class="w-1/4 btn btn-neutral">입력!</button>
      </div>
      <div class="mt-8 space-x-2 space-y-2">
        <p class="float-right flex">{{ list.length }}명</p>
        <p
          v-for="person in list"
          class="badge badge-neutral badge-outline badge-lg cursor-pointer hover:border-blue-500 hover:border-2 hover:font-bold hover:text-blue-700 hover:p-3"
          @click="removePersonFromList(person)"
        >
          {{ person }}
          <i class="ri-close-line"></i>
        </p>
      </div>

      <h2 class="prose prose-2xl font-bold text-black mt-10">팀장</h2>
      <div class="w-full flex space-x-4 pt-2">
        <input v-model="leaderInput" placeholder="이름 입력" class="w-3/4 input input-bordered input-neutral bg-white" @keyup.enter="addToLeaderList()" />
        <button @click="addToLeaderList()" class="w-1/4 btn btn-neutral">입력!</button>
      </div>
      <div class="mt-8 space-x-2 space-y-2">
        <p class="float-right flex">{{ leaderList.length }}명</p>
        <p
          v-for="person in leaderList"
          class="badge badge-neutral badge-outline badge-lg cursor-pointer hover:border-blue-500 hover:border-2 hover:font-bold hover:text-blue-700 hover:p-3"
          @click="removePersonFromLeaderList(person)"
        >
          {{ person }}
        </p>
      </div>

      <div class="w-full flex space-x-4 mt-48">
        <input v-model="teamCount" type="number" placeholder="팀 갯수" class="w-1/4 !h-auto input input-bordered input-neutral bg-white" />
        <button @click="doneAndMakeList()" class="!w-3/4 btn btn-neutral btn-lg btn-wide">
          <p v-if="shuffleTeam == false">팀 만들기!</p>
          <span v-else class="loading loading-spinner"></span>
        </button>
      </div>

      <!-- <button @click="myChunk(5)" class="w-1/4 btn btn-primary">FOR TEST!</button> -->
    </div>
    <div class="w-full md:w-3/5 h-full bg-neutral-700 px-10 py-4 md:px-20 md:py-12">
      <h2 class="prose prose-2xl font-bold text-white dark:text-white">팀</h2>
      <div v-if="chunkedList.length > 0 && shuffleTeam == false" class="space-y-4 pt-2">
        <div v-for="team in chunkedList" class="shadow w-full py-4 px-4 bg-white rounded-lg space-x-2 space-y-2">
          <div class="flex justify-between">
            <p class="font-black text-black font-lg">TEAM. {{ team[0] }}</p>
            <p class="">{{ team.length }}명</p>
          </div>
          <div class="badge badge-success badge-lg" v-for="person in team">{{ person }}</div>
        </div>
      </div>
      <div v-if="shuffleTeam == true" class="space-y-4 pt-2">
        <div v-for="skeleton in teamCount" class="skeleton h-22 w-full"></div>
      </div>

      <button @click="goToPlayGame()" v-if="chunkedList.length > 0" class="btn btn-active btn-lg btn-wide fixed bottom-10 md:bottom-20 w-[calc(86%-20px)] md:w-[calc(60%-160px)]">
        게임하러 가기 >
      </button>
    </div>
  </div>
</template>

<script setup>
  const name = ref('')
  const list = ref([
    '김내리',
    '김명란',
    '김민지',
    '김선경',
    '김은혜',
    '김주영',
    '김하영',
    '류수현',
    '명수지',
    '박은선',
    '박찬숙',
    '박현호',
    '서희주',
    '안지현',
    '양예진',
    '유용곤',
    '윤의섭',
    '윤서영',
    '윤선우',
    '이미성',
    '이소희',
    '이영주',
    '이정은',
    '이종희',
    '이현미',
    '이화랑',
    '장수경',
    '장윤화',
    '장하영',
    '정다영',
    '하랑도사님',
    '조점숙',
    '최대훈',
    '최정운',
    '한재원',
  ])

  const leaderInput = ref('')
  const leaderList = ref([])

  const teamCount = ref(0)
  const shuffleTeam = ref(false)
  const chunkedList = ref([])

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
    if (teamCount.value > 0) {
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
        }, 100)
        shuffleTeam.value = false
      }, 200)
    }
  }

  const router = useRouter()

  function goToPlayGame() {
    const fixedTeam = useFixedTeam()
    fixedTeam.value = chunkedList.value

    router.push('teamplay')
  }
</script>
