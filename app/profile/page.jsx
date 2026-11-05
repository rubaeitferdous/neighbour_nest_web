const { error } = await authClient.updateUser({ name, image: photoURL });
if (error) return toast.error(error.message);
toast.success("Profile updated");
