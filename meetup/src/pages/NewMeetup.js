import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addNMeetupHandler(meetupData) {
    fetch(
      "https://react-course-bd5d1-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addNMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
