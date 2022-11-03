<template>
    <div class="content">
        <div class="card-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card-header-content">
                            <div class="logo-global">
                                <global-outlined style="font-size: 20px; color: #fff;" />
                            </div>

                            <div class="title-header">
                                <span>Global Sales by Top Locations</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="card-body-content">
                            <div class="table-sales">
                                <table class="table">
                                    <tbody class="body-table">
                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="../../../../assets/united-states-of-america.png" alt="">
                                                </div>
                                            </td>

                                            <td>USA</td>
                                            <td>2.920</td>
                                            <td>53.23%</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="../../../../assets/germany.png" alt="">
                                                </div>
                                            </td>

                                            <td>Germany</td>
                                            <td>1.300</td>
                                            <td>20.43%</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="../../../../assets/australia.png" alt="">
                                                </div>
                                            </td>

                                            <td>Australia</td>
                                            <td>760</td>
                                            <td>10.35%</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="../../../../assets/united-kingdom.png" alt="">
                                                </div>
                                            </td>

                                            <td>United Kingdom</td>
                                            <td>690</td>
                                            <td>7.87%</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="../../../../assets/romania.png" alt="">
                                                </div>
                                            </td>

                                            <td>Romania</td>
                                            <td>600</td>
                                            <td>5.94%</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="../../../../assets/brazil.png" alt="">
                                                </div>
                                            </td>

                                            <td>Brasil</td>
                                            <td>550</td>
                                            <td>4.34%</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div class="map-global">
                                <div class="map-world">
                                    <WorldMap></WorldMap>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CardChart></CardChart>
        <CardStatus></CardStatus>
        <ManageListings></ManageListings>
    </div>
</template>

<script setup lang="ts">
import {
    GlobalOutlined  
} from "@ant-design/icons-vue";
import CardChart from "./CardChart.vue";
import CardStatus from './CardStatus.vue';
import ManageListings from './ManageListings.vue';
import WorldMap from './WorldMap.vue';


</script>

<style scoped>
.content {
    margin-top: 60px;
}

.card-content {
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
}

.map-global {
    margin-top: -30px;
}

.map-world {
    width: 100%;
    margin: 0 auto;
}


.card-header-content {
    display: flex;
    align-items: center;
    padding-top: 10px;
}

.logo-global {
    padding: 20px;
    margin-top: -25px;
    background-color: green;
    text-align: center;
    opacity: 0.9;
    border-radius: 4px;
    margin-right: 15px;
}

.title-header span {
    font-size: 18px;
    opacity: 0.7;
}

.card-body-content {
    display: grid;
    grid-template-columns: 49% 49%;
    gap: 2%;
    margin: 30px 0;
}

.body-table tr td {
    padding: 15px 10px;
    font-size: 14px;
}

.body-table tr td:nth-child(1) img {
    width: 30%;
}

.body-table tr td:not(:nth-child(1)) {
    opacity: 0.8;
}

.body-table tr td:nth-child(3),
.body-table tr td:nth-child(4) {
    text-align: right;
}
.body-table tr:last-child {
    border-bottom: hidden;
}

</style>