import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Card = () => {

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[43px] mx-10 md:mx-10'>
            <Slide triggerOnce={true} direction='up' duration={500}>
                <div className="md:w-[25vw] w-[40vw] h-[120px] md:h-[150px]   lg:w-[220px] bg-center rounded-3xl bg-cover overflow-hidden lg:h-[122px] shadow bg-[url('https://s3-alpha-sig.figma.com/img/1a00/6a99/49dea1947c1d1d9e22f98d0049fc0d74?Expires=1705276800&Signature=Sp1wwtBrPRm0NEKuxu2TxOvNQNpZXa6sY6UKPo9jZo5759rKhBr-Tqa3yYR0i2MWPwMbaMayq2l4FNKeBImvIkE1krIjeBglgmfGcemhJPNsyBzKuj2rwszxny9tURPTzG5kIA8wsqeQBwrD2SJKc0bVH8s8IGgF~yAI1Nb4fyy9ScOVJ8NgDU8V3yKdRUZ7~jXtdaShOyUlj~nXfKA9gPu3Tlc2FDkCSshGYq7813RSXbGkjYyQACni5HgvPQN6pv-uZ-erMZ8fcTuPMYpgiMBdt8~t~Zl23~uchosfJuJ2XhEYZ~IEdf2~~PKlwN0TSouzi2NkeI~oVZPFQ7vZrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
                    <p className='w-full hover:scale-110 text-center py-24 text-xs bg-gradient-to-b from-transparent to-[#080808] text-white'>Design</p>
                </div>

                <div className="lg:w-[220px] md:w-[25vw] w-[40vw] h-[120px] md:h-[150px] bg-center rounded-3xl bg-cover overflow-hidden lg:h-[122px] shadow bg-[url('https://s3-alpha-sig.figma.com/img/4a1a/6a57/d22d05e7677f34a41bcc7ee4fa8d1871?Expires=1705276800&Signature=HAILP3Y-2rRN0RlRtiAAr2hm6tV0lKSlJZf9IbFec02eOtvP0BLWHH~lAVcwYEO23CdmRXAE4Ij88~GhovR9FcOhS0z3p2hf9RyqN4L62TuM9KnHFlnXZS~boSEXLnJFQQ7SafYrh2Nj~1KL84pAi3-UNa5RUtE1bTP0ixhfK3mstoY7vtYPvIdsLIHmj0T9xMkOpFmCSzQ0Y0-doQSLL1YueBTldsgikO6lloL5uFA4j3MY5O~KS6O6txhmgDyAq4-Ne6YGYCnle2jvGlMsqDLCmCzvTw9LJ1AVO2StMbRdK2B9hPi-Hz34qK7CMoR4-FEOonr72WsywYHtwJ7oCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
                    <p className='w-full hover:scale-110 text-center py-24 text-xs bg-gradient-to-b from-transparent to-[#080808] text-white'>Web Development</p>
                </div>
                <div className="lg:w-[220px] md:w-[25vw] w-[40vw] h-[120px] md:h-[150px] bg-center rounded-3xl bg-cover overflow-hidden lg:h-[122px] shadow bg-[url('https://s3-alpha-sig.figma.com/img/7c62/2325/e0fcd1cc8a2c2b181272dcecd9b778dc?Expires=1705276800&Signature=E~sKz7qL~webLj4oanbKZxQ5KHwhks-aMuyT1V9DuPHftqIxYClobGeKjPN6e3rL8-~GaiFIjJiRqA37mpOWI7oTnvPJ4-eJnSm~m2ptpHyWRGXFQchMxHvCCoUMuT2W-DtUttyWMNqLjqeOY187REqQskgKGWm5O50woR0tZDQIAe-WMe4KAn5sC0v09tniNmLb47R-be3DnCZXJZU5KKqPSKJAxBavJZiwtml0-4oOg~Po6B1qQE~jKRqGcG0s3Izwxc03A5drI~zEQcsuiFBQBTKq2Tb8m3JIEtBHJgBnqCEpyconjWQqto4WW0F36gacgZjW3ZoMwhk7stf7Fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
                    <p className='w-full text-center py-24 text-xs bg-gradient-to-b from-transparent hover:scale-110 to-[#080808] text-white'>App Development</p>
                </div>

                <div className="lg:w-[220px] md:w-[25vw] w-[40vw] h-[120px] md:h-[150px] rounded-3xl bg-cover overflow-hidden lg:h-[122px] shadow bg-[url('https://s3-alpha-sig.figma.com/img/4a59/8e4b/e781e24a62660ecb5d2967d38f8f3a80?Expires=1705276800&Signature=Ln~NMFwKxg2WB8XN4parVsirbubs65sM55pjLo84iVnXjxxm3cqrEChUU2fOgLyGK3YT6jT-APlu-1fD8N55xxbb9ATUoVgXLJBB75WtgSRGsqxB0s9OCWh0DW8Xo6hQZ7P2OIaxirrR5HtUbaBsPD4UANr7bFZ-UhzRD6WDx-b5COsc6jHRH7NC0oIpB03VvOYzjwB2tHMzZaXinKZB5QMGrjJ5UFF~hYMRKNiiDDZ6ZEu~e11ox3sJxdxVmS-2EyJ4IO8j3XNvgTjOi8dUHivkMlB5h6tbwpxnhD0VjnQ~-nv3TP~fDXpCXdUCQ~M0npBeega6LH5gz4gQESSgqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
                    <p className='w-full text-center py-24 text-xs bg-gradient-to-b from-transparent hover:scale-110 to-[#080808] text-white'>Data analyst</p>
                </div>
                <div className="lg:w-[220px] md:w-[25vw] w-[40vw] h-[120px] md:h-[150px] rounded-3xl bg-cover overflow-hidden lg:h-[122px] shadow bg-[url('https://s3-alpha-sig.figma.com/img/2ebc/1c72/dca051c95249f50df6cfcdd502d464d6?Expires=1705276800&Signature=hIWAkZEq74Nh4GhFLFhmJSgTPttXqGHIvsGwvASgCKzaTmpk2BdaOxc67PLUziE6URHl4~Ofqh7FRnEEjORUEWZSMdrlaSv~Ms~z-bmI2j8cqS~roYntqttBB94yA3QMdrhMaCUfEP0yUoAjtdtnmMoHkBSKeYY7rwUqn9w6ZS8Z~91O92bZ~LiWtPnRBSvJ59uacc9M2VgHYW46XrzfEzM6yNToKrYz96oW04cX-pN0UKQK~3pp2KwdDnmLPvvFu46wQEcPm~KS8l4pzm8LgbEYv7zmD4HAapT4uh70akAoYEgCJwuwoxZnygIknGjWeGHUuDrtqif6Cai6BYB-VQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
                    <p className='w-full text-center py-24 text-xs bg-gradient-to-b from-transparent hover:scale-110 to-[#080808] text-white'>artificial intelligencet</p>
                </div>
                <div className="lg:w-[220px] md:w-[25vw] w-[40vw] h-[120px] md:h-[150px] rounded-3xl bg-cover overflow-hidden lg:h-[122px] shadow bg-[url('https://s3-alpha-sig.figma.com/img/5e02/7703/5228b2fa391ba40508fcfcccbbf20d39?Expires=1705276800&Signature=RKBFBXiM8zvN55mTpZgwA5Gl4D-ALOIeeZjlnAVKJMBHqpnvKu7j-QJV1B4wLSlDXVIyNGXNmDySA2xQTNIlTUyxzEJ6joS2vBsFndrgisMNDKh6A2rCvWVM6nFR5VitCA4y1HrucjuCwQSqf4HGhyG~CYrRZUyns9W0LKuGHbV2USY~CnrW-jkG1PD3y0hOnJmgP9jy8BnqlUIa-r-nRPWliJMu2ZHk8N~rMObIiZ3v3RH2--I-oYrFNubtDlrXB1ouU-XTKgb9f4FTYQ8C1TJiSReQ-rDjp6FSb0yDmpctypy5ogQDV2lum92qxYayJGlzuPTl7NX8ChntiZ~5JQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
                    <p className='w-full hover:scale-110 text-center py-24 text-xs bg-gradient-to-b from-transparent to-[#080808] text-white'>Cyber security</p>
                </div>
                <div className="lg:w-[220px] md:w-[25vw] w-[40vw] h-[120px] md:h-[150px] rounded-3xl bg-cover overflow-hidden lg:h-[122px] shadow bg-[url('https://s3-alpha-sig.figma.com/img/d8f7/881b/94e5e4a4b0ba6c259fd918fb043f3d7b?Expires=1705276800&Signature=fevujphbYtinSJ7O4CG5RTmSX6Rt21Jw0ffqBpLbk6l-1uC0JTJypxLVNmjhFeZRJcZCKHJ75T5V0FuvRagHoyNkB6rUOrT5fLDKdPAh29kShzOIYdpcIWLADBYgQH2qMMRYHMfUFiqUPTksuYO6dcwNxYF2-i1irKOVhoOAKNCobY~-il2ojg-5XIWPdny6DJIt9Eywep9ZpVZkLgmC6-Mj2hBMrG5MK2D3L0UDJoTTar6XxF0CXBHFYAU9c3O84zS6nE8xDMwrC6yzaNmbYblvG8u3EsxZJWHVbuHmXyG9dBusvFEuU~1IPcmG7qFjaGmVAwkL-W8CidWVs3JSdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
                    <p className='w-full hover:scale-110 text-center py-24 text-xs bg-gradient-to-b from-transparent to-[#080808] text-white'>Project management</p>
                </div>
                <div className="lg:w-[220px] md:w-[25vw] w-[40vw] h-[120px] md:h-[150px] rounded-3xl bg-cover overflow-hidden lg:h-[122px] shadow bg-[url('https://s3-alpha-sig.figma.com/img/5b6e/52f0/0106725a0554ae6f00efc255e977e033?Expires=1705276800&Signature=Xp4uLOycEvXtlrHtoyDMyjmRq2bnurmluNSFuFl4j0zRGSS0NefygBwhWNknpxmxlhx18MPXIGxy03adNLo8bn5K112sROKOEylBXgcSeNik2dASCWnBulLzbu4pXf3so1kWOO87aruGWfKw9i34E2A8S4dg3JKIrb4yV4qWHhu8c1fj53Hi2-X9f1Xi900tjtQVV5Ucsb4oKIaMXkIy635BMQ~hLLQHDFtuGqCzisqfDUObwqcQ2KtmskQmbWzr~P9dWUAHrPipUEbgvf974k~gTsXvsLpP7NjJfgg~nNjPetzQzRK64S84WL5rWADbNZOC~9QSh7wXYnskYeurQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
                    <p className='w-full text-center py-24 text-xs bg-gradient-to-b from-transparent hover:scale-110 to-[#080808] text-white'>Business</p>
                </div>
            </Slide>
        </div >

    )
}

export default Card