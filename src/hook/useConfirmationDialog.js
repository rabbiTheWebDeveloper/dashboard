import Swal from 'sweetalert2';
const useConfirmationDialog = (title, text, confirmButtonText) => {
    const confirmAction = async () => {
        const result = await Swal.fire({
            title,
            text,
            showCancelButton: true,
            confirmButtonColor: '#9A65D1',
            cancelButtonColor: '#d33',
            confirmButtonText,
        });
        return result.isConfirmed;
    }
    return confirmAction;
}
export default useConfirmationDialog;