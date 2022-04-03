import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://kite.ir/UploadData/Packages/%D8%A2%D9%86%D8%AA%D8%A7%D9%84%DB%8C%D8%A7.jpg_f0jqvr3a.4sc.jpg",
    address: "Some address 5, 12345 some city",
    description: "this is first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://kite.ir/UploadData/Packages/%D8%A2%D9%86%D8%AA%D8%A7%D9%84%DB%8C%D8%A7.jpg_f0jqvr3a.4sc.jpg",
    address: "Some address 5, 12345 some city",
    description: "this is second meetup",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
