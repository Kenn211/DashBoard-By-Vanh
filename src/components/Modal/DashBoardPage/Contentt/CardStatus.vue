<template>
    <div class="card-status">
        <div class="card-status-item">
            <div class="card-header">
                <div class="logo-card-header">
                    <i class="fas fa-couch"></i>
                </div>

                <div class="title-card-header">
                    <span>Bookings</span>
                    <span>262</span>
                </div>
            </div>

            <div class="card-footer">
                <div class="title-footer">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>Get More Space...</span>
                </div>
            </div>
        </div>


        <div class="card-status-item">
            <div class="card-header">
                <div class="logo-card-header">
                    <i class="fas fa-equals"></i>
                </div>

                <div class="title-card-header">
                    <span>Website Visits</span>
                    <span>21.101</span>
                </div>
            </div>

            <div class="card-footer">
                <div class="title-footer">
                    <i class="fas fa-tag"></i>
                    <span>Tracked from Google Analytics</span>
                </div>
            </div>
        </div>


        <div class="card-status-item">
            <div class="card-header">
                <div class="logo-card-header">
                    <i class="fas fa-store"></i>
                </div>

                <div class="title-card-header">
                    <span>Revenue</span>
                    <span>$34,245</span>
                </div>
            </div>

            <div class="card-footer">
                <div class="title-footer">
                    <i class="fas fa-calendar-week"></i>
                    <span>Last 24 Hours</span>
                </div>
            </div>
        </div>


        <div class="card-status-item">
            <div class="card-header">
                <div class="logo-card-header">
                    <i class="fab fa-twitter"></i>
                </div>

                <div class="title-card-header">
                    <span>Followers</span>
                    <span>+211</span>
                </div>
            </div>

            <div class="card-footer">
                <div class="title-footer">
                    <i class="fa fa-sync-alt"></i>
                    <span>Just Updated</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.card-header, .card-footer{
    background-color: #fff;
    padding-left: 0;
    padding-right: 0;
}

.card-header{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
}
.card-status {
    display: grid;
    grid-template-columns: 23% 23% 23% 23%;
    gap: 2%;
    margin-top: 60px;
}

.card-status-item{
    background-color: #fff;
    padding: 0 15px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
    border-radius: 6px;
    cursor: pointer;
}

.card-status-item:nth-child(2) .logo-card-header i{
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(233 30 99 / 40%);
    background: linear-gradient(60deg,#ec407a,#d81b60);
}

.card-status-item:nth-child(3) .logo-card-header i{
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(76 175 80 / 40%);
    background: linear-gradient(60deg,#66bb6a,#43a047);
}

.card-status-item:nth-child(4) .logo-card-header i{
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
    background: linear-gradient(60deg,#26c6da,#00acc1);
}

.logo-card-header{
    margin-top: -25px;
}
.logo-card-header i{
    font-size: 30px;
    padding: 25px;
    background: linear-gradient(60deg,#ffa726,#fb8c00);
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(255 152 0 / 40%);
    border-radius: 3px;
    color: #fff;
}

.title-card-header{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.title-card-header span:nth-child(1){
    opacity: 0.7;
    font-size: 15px;
}

.title-card-header span:nth-child(2){
    font-size: 24px;
    opacity: 0.8;
}

.title-footer{
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 5px 0;
}

.title-footer i{
    color: red;
    margin-right: 5px;
}

.title-footer span{
    color: purple;
}

.card-status-item:nth-child(2) .title-footer i, .card-status-item:nth-child(2) .title-footer span{
    color: gray;
}

.card-status-item:nth-child(3) .title-footer i, .card-status-item:nth-child(3) .title-footer span{
    color: gray;
}

.card-status-item:nth-child(4) .title-footer i, .card-status-item:nth-child(4) .title-footer span{
    color: gray;
}
</style>