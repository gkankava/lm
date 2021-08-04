import axios from "axios";

const ENDPOINT = "http://134.209.239.1";

export const fetchChat = (setIsFetching, username, setMessages) => {
  setIsFetching(true);
  axios
    .get(`${ENDPOINT}/api/chat/${username}`)
    .then((res) => {
      setIsFetching(false);
      setMessages([...res.data.reverse()]);
    })
    .catch((err) => {
      console.log(err);
      setIsFetching(false);
    });
};

export const sendMessage = (socket, message) => {
  if (message) {
    socket.emit("sendMessage", message, (callback) => console.log("sent"));
  }
};

export const sendMedia = (socket, uploadedMedia, setUploadedMedia) => {
  if (uploadedMedia) {
    socket.emit("sendMessage", uploadedMedia, () => setUploadedMedia());
  }
};

export const startRecording = async (Audio, setRecording) => {
  try {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });
    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    await recording.startAsync();
    setRecording(recording);
  } catch (err) {
    console.error("Failed to start recording", err);
  }
};

export const stopRecording = async (
  Audio,
  setRecording,
  recording,
  setMedia
) => {
  setRecording(undefined);
  await recording.stopAndUnloadAsync();
  const uri = recording.getURI();

  setMedia({
    name: uri.slice(uri.lastIndexOf("/") + 1),
    uri: uri,
    type: `audio/${uri.slice(uri.lastIndexOf("."))}`,
  });

  const sound = new Audio.Sound();
};

export const uploadMedia = async (
  media,
  setMedia,
  setUploadedMedia,
  setProgress
) => {
  const formData = new FormData();
  if (media) {
    formData.append("item", {
      uri: media.uri,
      type: media.type,
      name: media.name,
    });
    try {
      await axios
        .post(`${ENDPOINT}/api/upload/media`, formData, {
          headers: {
            Accept: "application/x-www-form-urlencoded",
          },
          onUploadProgress: (data) => {
            setProgress(Math.round((100 * data.loaded) / data.total));
          },
        })
        .then((res) => {
          setMedia(undefined);
          if (res.data.isUploaded) {
            let url = res.data.url;
            setUploadedMedia(url);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
};
