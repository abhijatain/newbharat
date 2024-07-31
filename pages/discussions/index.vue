<template>
    
    <div class=" container mx-auto flex flex-col md:grid md:grid-cols-2 gap-2 md:p-6 ">
      <UDivider label="Latest" />
      <Carousel :items="items" class="border-b mb-3 dark:border-blue-800/50"/>
      <UDivider label="Feed" />
        <DiscussionsCard4 v-for="(article, index) in articles" :key="index" :article="article" class="shadow-lg dark:shadow-blue-800/50 shadow-blue-500/50"/>   
    </div>
</template>

<script setup>
const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
];
const articles = ref([
  

  {
    title: "Modi's Economic Policies and Their Impact on Public Sector Banks",
    source: 'The Hindu',
    date: 'May 12, 2024',
    topicLean: 80,
    authorLean: 55,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article explores economic policies and their implications, with a critical view on how they affect public sector banks.',
    authorLeanReason: 'The article provides a balanced view but includes critical insights into government policies.',
    replies: 310,
    views: '320K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Rahul Gandhi Criticizes Modi’s Recent Financial Reforms",
    source: 'The Times of India',
    date: 'May 13, 2024',
    topicLean: 70,
    authorLean: 60,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are left",
    topicLeanReason: 'The article reports on Rahul Gandhi’s criticism of recent financial reforms, reflecting a left-leaning perspective.',
    authorLeanReason: 'The article’s author is known for a left-leaning stance on economic policies.',
    replies: 150,
    views: '200K',
    topicColor: '#035397', // Left
    authorColor: '#035397', // Left
    topicLeanValue: 'left',
    authorLeanValue: 'left'
  },
  {
    title: "Impact of Modi’s Economic Policies on the Banking Sector",
    source: 'The Economic Times',
    date: 'May 14, 2024',
    topicLean: 60,
    authorLean: 45,
    topicLeanText: 'Topic covers center views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article provides an analysis of Modi’s policies from a neutral perspective, focusing on their impact on the banking sector.',
    authorLeanReason: 'The author maintains a neutral stance while analyzing economic policies.',
    replies: 220,
    views: '275K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'center',
    authorLeanValue: 'center'
  },
  {
    title: "BJP's Economic Strategy: A Critical Review",
    source: 'The Indian Express',
    date: 'May 15, 2024',
    topicLean: 75,
    authorLean: 50,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article critically reviews the BJP’s economic strategy, suggesting left-leaning implications.',
    authorLeanReason: 'The author’s views are more centered but offer a critical perspective.',
    replies: 180,
    views: '250K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Public Sector Banks and Modi’s Financial Policies: An Overview",
    source: 'Hindustan Times',
    date: 'May 16, 2024',
    topicLean: 65,
    authorLean: 40,
    topicLeanText: 'Topic covers center-left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article discusses the financial policies with a focus on public sector banks, adopting a center-left approach.',
    authorLeanReason: 'The author’s views are more centered but provide a critical analysis of financial policies.',
    replies: 195,
    views: '260K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'center-left',
    authorLeanValue: 'center'
  },
  {
    title: "The Role of Public Sector Banks in Modi’s Economic Vision",
    source: 'Business Standard',
    date: 'May 17, 2024',
    topicLean: 55,
    authorLean: 70,
    topicLeanText: 'Topic covers center views',
    authorLeanText: "Author views are right",
    topicLeanReason: 'The article evaluates the role of public sector banks in the context of Modi’s economic vision, with a center perspective.',
    authorLeanReason: 'The author’s views lean towards the right, providing a supportive analysis.',
    replies: 140,
    views: '210K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#E8630A', // Right
    topicLeanValue: 'center',
    authorLeanValue: 'right'
  },
  {
    title: "Analyzing the Effectiveness of Modi’s Economic Policies",
    source: 'Financial Express',
    date: 'May 18, 2024',
    topicLean: 85,
    authorLean: 60,
    topicLeanText: 'Topic covers right views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article offers a detailed analysis of Modi’s economic policies, reflecting right-leaning views on their effectiveness.',
    authorLeanReason: 'The author provides a center view while discussing the effectiveness of the policies.',
    replies: 250,
    views: '290K',
    topicColor: '#E8630A', // Right
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'right',
    authorLeanValue: 'center'
  },
  {
    title: "Modi’s Financial Reforms and Their Impact on the Economy",
    source: 'The Guardian',
    date: 'May 19, 2024',
    topicLean: 70,
    authorLean: 55,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article reviews Modi’s financial reforms, highlighting their impact on the economy with a left-leaning perspective.',
    authorLeanReason: 'The author maintains a neutral stance but provides a critical perspective on the financial reforms.',
    replies: 230,
    views: '280K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Rahul Gandhi’s View on Modi’s Economic Reforms",
    source: 'The New Indian Express',
    date: 'May 20, 2024',
    topicLean: 75,
    authorLean: 50,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article covers Rahul Gandhi’s perspective on Modi’s economic reforms, reflecting left-leaning views.',
    authorLeanReason: 'The author provides a balanced view but highlights criticisms of the reforms.',
    replies: 160,
    views: '225K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Economic Policies Under Modi: A Comprehensive Review",
    source: 'Livemint',
    date: 'May 21, 2024',
    topicLean: 60,
    authorLean: 45,
    topicLeanText: 'Topic covers center views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article offers a comprehensive review of economic policies under Modi, with a center-leaning perspective.',
    authorLeanReason: 'The author presents a balanced view with a focus on the effectiveness of the policies.',
    replies: 210,
    views: '270K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'center',
    authorLeanValue: 'center'
  },
  {
    title: "The Impact of Financial Reforms on Public Sector Banks",
    source: 'Deccan Herald',
    date: 'May 22, 2024',
    topicLean: 65,
    authorLean: 50,
    topicLeanText: 'Topic covers center-left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article discusses the impact of financial reforms on public sector banks, reflecting a center-left view.',
    authorLeanReason: 'The author provides a balanced perspective with a critical analysis of the reforms.',
    replies: 190,
    views: '265K',
    topicColor: '#399918', // Light Green (Center)
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'center-left',
    authorLeanValue: 'center'
  },
  {
    title: "Public Sector Banks and Economic Reforms: A Balanced Analysis",
    source: 'The Tribune',
    date: 'May 23, 2024',
    topicLean: 70,
    authorLean: 55,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article provides a balanced analysis of public sector banks and economic reforms with left-leaning insights.',
    authorLeanReason: 'The author maintains a neutral stance but provides a critical perspective on the economic reforms.',
    replies: 200,
    views: '275K',
    topicColor: '#035397', // Left
    authorColor: '#399918', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
]);




</script>