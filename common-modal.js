/**
 * 通用弹窗功能脚本
 * 适用于所有后台管理页面
 */

// 弹窗控制
function openModal(modalId) { 
    document.getElementById(modalId).classList.add('active'); 
}

function closeModal(modalId) { 
    document.getElementById(modalId).classList.remove('active'); 
}

// Toast提示
function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast toast-' + type;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// 搜索功能
function handleSearch() {
    const keyword = document.getElementById('searchInput').value;
    if (!keyword) {
        showToast('请输入搜索关键词', 'error');
        return;
    }
    showToast('搜索: ' + keyword, 'info');
}

// 重置功能
function handleReset() {
    document.getElementById('searchInput').value = '';
    showToast('已重置', 'success');
}

// 分页功能
let currentPage = 1;
function changePage(page) {
    if (page === 'prev') {
        if (currentPage > 1) currentPage--;
    } else if (page === 'next') {
        currentPage++;
    } else {
        currentPage = page;
    }
    document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    showToast('切换到第 ' + currentPage + ' 页', 'info');
}

// 通用保存
function handleSave() {
    closeModal('formModal');
    showToast('保存成功', 'success');
}

// 通用删除
let deleteTarget = '';
function openDeleteModal(name) {
    deleteTarget = name;
    const deleteNameEl = document.getElementById('deleteName');
    if (deleteNameEl) deleteNameEl.textContent = name;
    openModal('deleteModal');
}

function handleDelete() {
    closeModal('deleteModal');
    showToast('删除成功', 'success');
}

// 点击遮罩关闭弹窗
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) closeModal(this.id);
        });
    });
});
