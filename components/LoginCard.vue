<template>
    <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-black dark:border-neutral-700" >
  <div class="p-4 sm:p-7">
    <div class="text-center">
      <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
      <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
        Don't have an account yet? Join us, and let’s make the world a smaller, more connected place for Indians everywhere.
        <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../examples/html/signup.html" >
          Sign up here
        </a>
      </p>
    </div>

    <div class="mt-5">
      <button @click="googleSignIn" v-if="!islogin" type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-black dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
        <svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
          <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
          <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
          <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
          <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
        </svg>
        Sign in with Google
      </button>
      <button type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-black dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" v-else>
        Logout
      </button>
    </div>
  </div>
</div>
</template>

<script setup>


let islogin = ref(false)

onMounted(() => {
  if (process.client) {
    const storedToken = localStorage.getItem('auth-token')
    if (storedToken) {
      islogin.value = true
    }
  }
})



const googleSignIn = () => {
  const { $firebase } = useNuxtApp()
  const provider = new $firebase.GoogleAuthProvider()
  $firebase.signInWithPopup($firebase.auth,provider).then((result) =>{
    localStorage.setItem('name',result.user.displayName)
    localStorage.setItem('image',result.user.photoURL)
    localStorage.setItem('email',result.user.email)

    fetch('https://test-am3oxfhvvq-em.a.run.app/google/login',{
                method:'POST',

                Allow: ['GET', 'POST','OPTIONS'],
                headers: {
                    'Content-type': 'application/json'
                },
                body : JSON.stringify({
                        "token" : result.user.accessToken
                      }), })
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the response JSON data
      return response.json();
    })
    // Handle the parsed JSON data in the next then block
    .then(data => {
      // Use the data received from the server
      if (data.state == 0 ){
                    localStorage.setItem('auth-token', data.token)
                    localStorage.setItem('role', data.role)
                    alert('Logged In')
                    islogin.value = true
      }
    })
    // Handle any errors that occur during the fetch request
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
    
  })
}

function logout() {
  localStorage.removeItem('auth-token')
  localStorage.removeItem('role')
  localStorage.removeItem('name')
  localStorage.removeItem('image')
  localStorage.removeItem('email')
  islogin.value = null

}

</script>